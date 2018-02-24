<template>
  <div class="middle-con" id="danmu-wrap">
    <div>online member: {{onlineCount}}</div>
    </div>
 
</template>
<script>
import bus from "../bus/danmubus";
import danmu from "./js/danmu";
import ajax from "../../js/ajax";
export default {
  name: "home",
  data: function() {
    return {
      list: [],
      newTextFlag: false,
      onlineCount:0
    };
  },
  methods: {
    getOnlineCount: function() {
            var url =
        process.env.NODE_ENV === "development" ? "localhost:8082" : "106.14.172.153:8082";
        url="//"+url+"/api/danmu/online";
      ajax.get({},url).then((data)=>{
        
          this.onlineCount=data;
          console.log(this.onlineCount);
      });
    },
    initSocket: function(socket) {
      //服务器
      var ws = location.protocol === "https:" ? "wss" : "ws"; // https 对应修改 wss
      var address =
        process.env.NODE_ENV === "development" ? "localhost:8082" : "106.14.172.153:8082";
      var uri = ws + "://" + address + "/ws";

      var time = null;
      var timedCount = function() {
        if (socket.readyState === 1)
          //1 - 表示连接已建立，可以进行通信。
          socket.send("heartbeat");
        time = setTimeout(timedCount, 58 * 1000); //58秒发一次心跳
      };
      if (socket === null || socket.readyState != 1) {
        //1 - 表示连接已建立，可以进行通信。
        socket = new WebSocket(
          uri + "?userName=" + parseInt(Math.random() * 100)
        );
        timedCount();
      }
      socket.onopen = function() {};
      //客户端接收服务端数据时触发
      socket.onmessage = (e)=> {
        
        var data = JSON.parse(e.data);
        this.list.push(data.Text);
        this.newTextFlag=true;
      };
      return socket;
    }
  },
  created: function() {
    //this.getDanMu();
    var socket = null;
    socket = this.initSocket(socket);
    this.getOnlineCount();
    bus.$on("sendDanMu", text => {
      if (!!!text) return;
      socket.send(JSON.stringify({ Text: text }));
      this.list.push(text);
      this.newTextFlag = true;
    });

    this.damuTicker = setInterval(() => {
      if (!this.newTextFlag) return false;
      let text = this.list[this.list.length - 1];
      let damu = new danmu("danmu-wrap", text, 20000);
      this.newTextFlag = false;
    }, 500);
  },
  destroyed: function() {
    clearInterval(this.damuTicker);
  }
};
</script>
<style >
.middle-con {
  background-color: rgba(255, 255, 255, 0.1);
  width: 80%;
}
#danmu-wrap {
  position: relative;
  overflow: hidden;
}

.danmu {
  position: absolute;
  padding: 5px 10px;
  background: rgba(255, 255, 255, 0.4);
  word-break: keep-all; /* 不换行 */
  white-space: nowrap; /* 不换行 */
  border-radius: 8px;
  display: inline-block;
  transition: right 20s cubic-bezier(0, 0, 1, 1);
  color: #000;
  right: -200px;
  font-size: 18px;
}
</style>



