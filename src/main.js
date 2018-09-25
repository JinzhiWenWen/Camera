// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router/index.js'
import store from './store'

import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import "@/assets/css/icon-style.css"
import "@/assets/css/initial.css"
import "@/assets/css/resetElement.css"
import 'lib-flexible/flexible.js'
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import echarts from 'echarts'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import AMap from 'vue-amap';
import Share from 'vue-social-share';
import 'vue-social-share/dist/client.css';
import {setStore,getStore} from '@/utill';
import $ from 'jquery'
Vue.use(Share);

Vue.prototype.$echarts = echarts ;
Vue.config.productionTip = false ; //取消提示的
Vue.use(ElementUI);
Vue.use(YDUI);
Vue.use(MintUI);
Vue.prototype.$http=axios;

//地图
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
'AMap.CircleEditor','AMap.Geolocation','AMapUI']});

// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//       if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
//           config.headers.Authorization = `token ${store.state.token}`;
//       }
//       return config;
//   },
//   err => {
//       return Promise.reject(err);
// });

// router.beforeEach((to,from,next)=>{
//   const token=getStore('token')
//   if(token != 'undefined'){
//     next({ path: '/land', replace: true })
//     console.log(123)
//   }else{
//     next({ path: '/register', replace: true })
//     console.log(321)
//   }
// })

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created(){
  },
  template: '<App/>',
})
