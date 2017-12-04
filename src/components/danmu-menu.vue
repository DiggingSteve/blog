<template>
  <div class="danmu-menu">
      <input name="danmuInput" type="input" placeholder="弹幕发射" v-model="text" @keydown.enter="sendDanMu" >
      <input name="danmuSubmit" type="button" value="Dan一哈" @click="sendDanMu" >
  </div>
</template>
<script>
import bus from './bus/danmubus';
export default {
  name:"danmu",
  data:function(){
return{
    text:""
}
  },
  methods:{
      sendDanMu:function(){
          
            bus.$emit('sendDanMu', this.text);   
            this.text="";
      }
  },
  watch:{

  }
}
</script>
<style scoped>
.danmu-menu{
    margin-top: 30px;
    
    width: 100%;

}
.danmu-menu input[name="danmuSubmit"]{
    
    background: #bddf87;
    border-radius: 5px;
    
    margin: 5px 0;
    
}

</style>

