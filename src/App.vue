<template>
  <div id="app">
    <div class="box">
      <keep-alive>
  <router-view>
            </router-view>

      </keep-alive>
          
    </div>
  </div>
</template>
<script>

import Bottom from './components/Bottom'
import {getStore} from './utill'

export default {
 
  name: "App",
  data(){
     return {
        transitionName: 'slide-left',
        time:'19990124241x'
     }
  },
  watch:{
   
  },
  methods:{
      
  },

  created(){  
  
   
  },
  mounted(){
       
  },
  components:{
      Bottom
  }
};
</script>

<style>
#app {
  height: 100%;
  overflow: hidden;
}
.core{
  height: 90%;
  width: 100%;
  overflow-y:scroll;
}
.bottom{
  height: 10%;
  width: 100%;
  background: yellow;
}
.box{
  height: 100%;
  width: 100%;
   overflow-y:scroll;
}

.child-view {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
