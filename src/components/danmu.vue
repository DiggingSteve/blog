<template>
  <div class="danmu">
      <input name="danmuInput" type="input" placeholder="弹幕发射" v-model="text" >
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
      }
  },
  watch:{

  }
}
</script>
<style scoped>
.danmu{
    margin-top: 30px;
    height: 200px;
    widows: 100%;

}
.danmu input[name="danmuSubmit"]{
    
    background: #bddf87;
    border-radius: 5px;
    font-size: 18px;
    margin: 5px 0;
    
}
.danmu  input[name="danmuInput"]{
    
  font-size: 20px;
    
}
</style>

