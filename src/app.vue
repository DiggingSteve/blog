<template>
  <div id="container">
  <HeadCon :show="headFlag"/>
  <transition enter-active-class="animated fadeInUp">
    <middle v-if="middleFlag"/>
  </transition>
  <!--loading-->
  <transition leave-active-class="animated fadeOutDown">
    <Loading v-if="loadFlag"/>
  </transition>
  </div>
</template>

<script>
import animate from 'animate.css';
import Loading from './components/loading';
import HeadCon from './components/head';
import middle from './components/middle';
export default {
  name: "container",
  components: {
    Loading,
    HeadCon,
    middle
  },
  data:function(){
    return{
     loadFlag:true,
     headFlag:false,
     middleFlag:false
    }
  },
  created:function(){
    setTimeout(() => {
      this.loadFlag=false;
      this.headFlag=true;
    }, 1000);
    setTimeout(() => {
      this.middleFlag=true;
    }, 3000);
  }

};
</script>

<style>

a{text-decoration:none !important;}
a:visited{color: #fff;text-decoration: none;}
input{outline: none;}
input[type="button"]{border:0;}
p,div{box-sizing: border-box;padding: 0;margin: 0;}
ul{list-style: none}
html{font-size: 10px;    font-family: arial, "Hiragino Sans GB", "Microsoft Yahei",  Tahoma, Helvetica, STHeiti;
    -webkit-font-smoothing: antialiased;}
body{display:block;position:absolute;left:0px;top:0px;width:100%;height:100%;overflow:hidden;color: #fff;text-align: center;vertical-align: middle;}
#container {
  position: relative;
  top: 0;
  z-index: 999;
width: 100%;
height: 100%;
background-color: #151515;

}
</style>
