<template>
  <div>
    <h3>keep-alive的使用</h3>
    <h5>一结合路由缓存一些页面</h5>
    <h5>1在路由中设置meta属性<br>
      meta: {
      keepAlive: true // 需要被缓存
      }
    </h5>
    <h5>2在app中设置router-view
      `<keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>`

    </h5>
    <p>使用keep-alive会将数据保留在内存中，如果要在每次进入页面的时候获取最新的数据，<br>需要在activated阶段获取数据，承担原来created钩子中获取数据的任务</p>
    <p>{{name}}</p>
    <router-link to="/slot">slot</router-link>
    <h5>二缓存动态组件</h5>
    <!-- bwf?? -->
    <keep-alive include='keep'>
      <my-keep>

      </my-keep>
    </keep-alive>
    <!-- <keep-alive>
      <component :is="keep"></component>

    </keep-alive> -->

  </div>
</template>
<script>
// let myKeep = {
//   template: ` <input type="text" v-model="keepMsg" placeholder="请输入。。。">`,
//   data:function(){
//     return{
//       keepMsg:''
//     }
//   },
//   name:'keep'
// };
import myKeep from "./children.vue";
export default {
  name: "",
  components: {
    myKeep
  },
  props: [],
  data: function() {
    return {
      name: 123
    };
  },
  created: function() {
    console.log("created");
    setTimeout(() => {
      this.name = "bwf";
    }, 1000);
  },
  activated() {
    console.log(123);
  },
  methods: {}
};
</script>
<style>
</style>