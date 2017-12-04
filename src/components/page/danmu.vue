<template>
  <div class="middle-con" id="danmu-wrap">
   
    </div>
  </div>
</template>
<script>
import bus from '../bus/danmubus';
import danmu from './js/danmu'
export default {
  name:"home",
  data:function(){
    return{
      list:[],
      newTextFlag:false
    }
  }
  ,
  methods:{
    
  },
  created:function(){
    bus.$on("sendDanMu",text=>{
      if(!!!text) return ;
      this.list.push(text);
      this.newTextFlag=true;
    });

   this.damuTicker= setInterval(()=>{
      if(!this.newTextFlag) return false;
       let text=this.list[this.list.length-1];
      let damu=new danmu("danmu-wrap",text,20000);
      this.newTextFlag=false;
    },500);
  }
  ,destroyed:function(){
    clearInterval(this.damuTicker);
  }
}
</script>
<style >

.middle-con {
  background-color: rgba(255, 255, 255, 0.1);
  width: 80%;
}
#danmu-wrap{
    position: relative;
    overflow: hidden;
  }
  
  .danmu{
    position: absolute;
    padding: 5px 10px;
   background: rgba(255, 255, 255, 0.4);
   word-break:keep-all;           /* 不换行 */
white-space:nowrap;          /* 不换行 */
   border-radius: 8px;
   display: inline-block;
    transition: right 20s cubic-bezier(0,0,1,1) ;
    color:#000;
    right: -200px;
    font-size: 18px;
  }

</style>



