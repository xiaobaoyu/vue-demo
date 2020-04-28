#1vue.use 到底做了什么事
##1.1如果我们封装了一个插件，里面有install方法，要使用这个插件，就需要         vue.use（），此时install方法的第一个参数是vue构造函数
```
  let objFunc = {
    install(params1, params2, params3) {
        console.log(`objFunc的第1个参数是${params1}`)
        console.log(`objFunc的第2个参数是${params2}`)
        console.log(`objFunc的第3个参数是${params3}`)
    }
}
export default objFunc;
```


```
import objFunc from './utils/say'
Vue.use(objFunc,11,22)
```
--------------------------------------------------------------

##1.2vue.use也可以用来注册全局组件和方法
```
let say = () => {
    console.log('say Bwf');
}
export default {
    install(vue) {
        vue.prototype.$say = say
    }
}
```

```
import sayObj from './utils/say'
Vue.use(sayObj)
```

----------------------------------------------------------------
```
const obj = {
    template: '<li>{{name}}这是个待办项{{parentData}}</li>',
    data() {
      return {
        name: 'bwf'
      }
    },
    props: ['parentData'],
    created() {
      console.log('created')
    },
  }
  export default{
      install(vueFuc){
        vueFuc.component('bwf-ui',obj)
      }
  }
  ```

```
 import useObj from './utils/use'
  Vue.use(useObj)
  ```

#2. vue.component vue.extend区别
##2.1vue.component用来注册一个全局组件
```
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
```

--------------------------------------------------------
##2.2vue.extend用来返回一个扩展实例构造器
###2.2.1利用Vue.extend创建一个实力构造器
###2.2.2new一个构造器的实例
###2.2.3把生成的实例添加到页面上并且导出实例的方法


```
import Vue from 'vue';
import message from './index.vue'
let MessageBox = Vue.extend(message);
//生成组件
let instance = new MessageBox({
    el: document.createElement('div')
})
export default {
    show(params) {
        console.log('instance', instance);
        document.body.appendChild(instance.$el)
        instance.show(params)
    },
    hide() {
        instance.hide()
    }
}
```

--------------------------------------------------------

#3.ajax  axios使用[http://www.axios-js.com/zh-cn/docs/]
##3.1代理的设置,接口地址：[http://v.juhe.cn/weather/index]
[https://www.cnblogs.com/cscredis/p/9286250.html]

```
  proxyTable: {
      '/api': {//此处并非一定和url一致。
        target: 'http://v.juhe.cn',
        changeOrigin: true,//允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    },

```
 created:function(){
     axios.get("/api/weather/index",{
         params:{
             cityname:this.cityname,
             key:"283834be08fd8b3ce44ac87b2bd48617"
         }

     }).then(res=>{
         this.res=res;
         console.log("res",res);
     }).catch(err=>{
         console.log(err)
     })
 },


 -----------------------------------------------------------------
 ##3.2axios拦截器的使用
 ```
 //请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        console.log("reqconfig",config)
        config.params.key="283834be08fd8b3ce44ac87b2bd48617"
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
  );
  
  //响应拦截器
  axios.interceptors.response.use(
    function (config) {
        // 对响应数据做点什么
        console.log("respconfig",config)
        let res=config.data;
        return res;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
  );

  export default axios;
  ```

##3.3axios的封装和基本使用
```
import axios from "./request"
const baseApi = '/api'
const reqweather = (params) => {
    console.log('111juhe')
return  axios.get(`${baseApi}/weather/index`, params)
}
export default reqweather
```


```
import reqweather from "../../api/juhe.js";

getWeather() {
    let that = this;
    reqweather({
    params: {
        cityname: that.cityname
    }
    })
    .then(res => {
        let today = res.result.today;
        // 推荐写法
        Object.assign(this.weatherInfo, today);
    })
    .catch(err => {
        console.log(err);
    });
}
```

##3.4扩展 ：Object.assign的使用


#四深入相应式原理

##由于 Vue 会在初始化实例时对 property 执行 getter/setter 转化，所以 property 必须在 data 对象上存在才能让 Vue 将它转换为响应式的

###对于对象
```
this.$set(this.someObject,'b',2)
this.someObject = Object.assign({}, this.someObject, { a: 1, b: 2 })
```
###对于数组
####Vue 不能检测以下数组的变动：
#####当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
#####当你修改数组的长度时，例如：vm.items.length = newLength

```
vm.$set(vm.items, indexOfItem, newValue)
vm.items.splice(newLength)
```


#五异步更新队列
##为了在数据变化之后等待 Vue 完成更新 DOM，可以在数据变化之后立即使用 Vue.nextTick(callback)。这样回调函数将在 DOM 更新完成后被调用。（瀑布流）
##我的理解：数据更新不是意味这dom同步更新，而是要等到下一帧才更新。


#六es6模块化

es6导入导出的使用，接口导出一个对象

4.怎么实现一个简单的vue.js 
https://es6.ruanyifeng.com/#docs/array  扩展运算符

5.各组件之间的访问
