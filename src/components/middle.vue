<template>
  <div class="middle">
    <transition  enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight"
       mode="out-in"        >
<router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <div class="topic">
      <div class="card">
          <div class="logo">
            <img src="../assets/logo.jpg">
          </div>
          <div class="about-me">
            <p><span>Nmae:</span><span>Steve</span></p>
            <p><span>Email:</span><span>335094162@qq.com</span></p>
          </div>
          <danmu/>
      </div>
    </div>
  </div>
</template>
<script>
import animate from "animate.css";
import danmu from './danmu-menu';
export default {
  name: "middle",
  components:{danmu}
};
</script>
<style >
.middle {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 5px;
}


.topic {
  position: relative;
  width: 20%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 0 5px;
}

.card {
  width: 85%;
  
  margin: auto;
  position: absolute;
  top: 20px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  background-color: rgba(27,27,27,.6);
  border-radius: 5px;
  animation: egg 4s ;
  -moz-animation: egg 4s; /* Firefox */
  -webkit-animation: egg 4s; /* Safari 和 Chrome */
  -o-animation: egg 4s;
  overflow: hidden;
}

@keyframes egg
{
0%   {opacity: 0;width: 50px;height: 50px;background: yellow;border-radius: 50%;}
30%{opacity: 0;width: 50px;height: 50px;background: #ecef07;border-radius: 50%;}
40%   {opacity: 1;width: 50px;height: 50px;background: #ecef07;border-radius: 50%;}
44%  {width: 50px;height: 50px;background: #efc807;border-radius: 50%;transform:translate(0,25px) }
48%  {width: 50px;height: 50px;background: #ed940d;border-radius: 50%;transform:translate(0,-5px) }
52%  {width: 50px;height: 50px;background: #ed890d;border-radius: 50%;transform:translate(0,30px) }
56%  {width: 50px;height: 50px;background: #ed740d;border-radius: 50%;transform:translate(0,-5px) }
60%  {width: 50px;height: 50px;background: #ed550d;border-radius: 50%;transform:translate(0,45px) }
64%  {width: 50px;height: 50px;background: #ed410d;border-radius: 50%;transform:translate(0,-5px) }
68%  {width: 50px;height: 50px;background: #ed2c0d;border-radius: 50%;transform:translate(0,55px) }
72%  {width: 50px;height: 50px;background: #ed2c0d;border-radius: 50%;transform:translate(0,-5px) }
76%  {width: 50px;height: 50px;background: #ed2c0d;border-radius: 50%;transform:translate(0,300px) }
100% {background:rgba(27,27,27,.6);}
}

@keyframes logoEgg {
  0%{opacity: 0}
  80%{opacity: 0}
  100%{opacity: 1}
}

@keyframes rotate {
  0%{transform: rotate(0)}
  50%{ transform: rotate(180deg)}
  100%{transform: rotate(360deg)}
}
.about-me{ padding: 0 10px;}
.about-me p span{
  color: #000;
  font-size: 16px;
  padding: 0 2px;
  
}
.about-me p {
  padding:5px 0;
  box-shadow: 0px 0px 0px #000;
  margin-bottom: 10px;
  background-color: #dedede;
}
.logo {
  padding: 2px;
  
}
.logo img {
  border: 1px solid transparent;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  box-shadow: #000 0px 0px 8px;
  animation:  4s ease forwards logoEgg ,2s 4s cubic-bezier(0.2, 0.2, 0.5, 0.5)   rotate
  
  
}
@media (max-width: 767px) {
  .logo img {
    width: 3rem;
    height: 3rem;
  }
  .title .head ul li {
    font-size: 0.6rem;
  }
}
</style>


