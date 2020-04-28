import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import HelloWorldB from '@/components/HelloWorldB'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // redirect:'/login',
      redirect:{
        name:'login'
      }
    },
    {
      path: '/helloworld',
      name:'helloworld',
      component:()=>import('@/views/HelloWorld/index')
    },
    {
      path: '/promise',
      name: 'promise',
      component: () => import('@/views/promise/index')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/far',
      name: 'far',
      component: () => import('@/views/farSon/far')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/index'),
      children:[
        {
          path: '/',
          redirect:'computed'
        },
        {
          path: 'computed',
          name: 'computed',
          component: () => import('@/views/computed/index')
        },
        {
          path: 'Vif',
          name: 'Vif',
          component: () => import('@/views/Vif/index')
        },
      ]
    },
    
    {
      path: '/computed',
      name: 'computed',
      component: () => import('@/views/computed/index')
    },
    // {
    //   path: '/style',
    //   name: 'style',
    //   component: () => import('@/views/style/index')
    // },
    {
      path: '/style/:id',
      name: 'style',
      component: () => import('@/views/style/index')
    },
    {
      path: '/Vif',
      name: 'Vif',
      component: () => import('@/views/Vif/index')
    },
    {
      path: '/Vfor',
      name: 'Vfor',
      component: () => import('@/views/Vfor/index')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('@/views/message/index')
    },
    {
      path: '/addOrEdit',
      name: 'addOrEdit',
      component: () => import('@/views/Vif/addOrEdit')
    },
    {
      path: '/arr',
      name: 'arr',
      component: () => import('@/views/arr/index')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('@/views/props/index')
    },
    {
      path: '/Vmodel',
      name: 'Vmodel',
      component: () => import('@/views/Vmodel/index'),
    },
    {
      path: '/slot',
      name: 'slot',
      component: () => import('@/views/slot/index')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('@/views/transition/index')
    },
    {
      path: '/filter',
      name: 'filter',
      component: () => import('@/views/filter/index')
    },
    {
      path: '/es6',
      name: 'es6',
      component: () => import('@/views/es6/test')
    },
    {
      path: '/es6Function',
      name: 'es6Function',
      component: () => import('@/views/es6/function')
    },
    {
      path: '/vuexA',
      name: 'vuexA',
      component: () => import('@/views/VUEX/A')
    },
    {
      path: '/vuexB',
      name: 'vuexB',
      component: () => import('@/views/VUEX/B')
    },
    {
      path: '/keepAlive',
      name: 'keepAlive',
      component: () => import('@/views/keepAlive/index'),
      meta: {
        keepAlive: false // 需要缓存
      }
    },
    {
      path: '/dynamic/:goodid',
      name: 'dynamic',
      component: () => import('@/views/vue-router/dynamic'),
      props:true,
    },
    {
      path: '/vue-router',
      name: 'vueRouter',
      props:true,
      // component: () => import('@/views/vue-router/index')
      components:{
        default: ()=>import('@/views/vue-router/index'),
        a: ()=>import('@/views/Vif/index'),
        b: ()=>import('@/views/Vfor/index')
    
      }
    },
    {
      path: '/todolist',
      name: 'todolist',
      props:true,
      component: () => import('@/views/todolist/index')
    },
    {
      path:"/farson",
      name:"farson",
      component:()=>import('@/views/farSon/far')

    },
    {
      path:"/ref",
      name:"ref",
      component:()=>import('@/views/ref/index')

    },
    {
      path:"/mixin",
      name:"mixin",
      component:()=>import('@/views/mixin/index')

    },
    {
      path:"/shopingcart",
      name:"shopingcart",
      component:()=>import('@/views/shopingcart/index')
    },
    {
      path:"/reqweather",
      name:"reqweather",
      component:()=>import('@/views/reqweather/index')

    },
    {
      path: '*',
      component: () => import('@/views/notFound/index')
    },
  ]
})
