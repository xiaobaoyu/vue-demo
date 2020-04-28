// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import store from './store/index'
import App from './App'
import router from './router'

import axios from 'axios'
import filters from './utils/filter'

import './utils/A'
import useObj from './utils/use'
import sayObj from './utils/say'
import loadingObj from "../src/views/loading"
// 
Vue.use(useObj)
Vue.use(sayObj)
Vue.use(loadingObj)

// 全局使用message组件
// import message from './views/message/index.js'
// Vue.prototype.$message = message


import './assets/base.css'
Vue.config.productionTip = false

Vue.component('todo-item', {
  template: '<li>{{name}}这是个待办项{{parentData}}</li>',
  data() {
    return {
      name: 'bwf'
    }
  },
  props: ['parentData'],
  created() {
  },
})


// router.beforeEach((to,from,next)=>{
//   console.log('123',to);
//   let Token = localStorage.getItem('Token')
//   if(to.path === '/login'){
//     next()
//   }else{
//     if(Token){
//       next()
//     }else{
//       next('/login')
//     }
//   }
// })


Vue.filter('dateFormate', filters.dateFormate)
Vue.filter('formatMoney', filters.formatMoney)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
