<template>
  <div class="middle-con" id="danmu-wrap">
   
    </div>
  </div>
</template>
<script>
import bus from '../bus/danmubus';
export default {
  name:"home",
  data:function(){
    return{
      list:[]
    }
  }
  ,
  methods:{
    
  },
  created:function(){
    bus.$on("sendDanMu",text=>{
      this.list.push(text);
    });
  },
  watch:{
    list:function(){
      console.log(this.list[this.list.length-1]);
    }
  }
}
</script>
<style scoped>

.middle-con {
  background-color: rgba(255, 255, 255, 0.1);
  width: 80%;
}


</style>


