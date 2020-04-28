<template>
  <div>
    <h5>dynamic商品详情页</h5>
    <p>一动态路由匹配</p>
    <p>goodid-{{goodid}}</p>
    <p>query--{{$route.query.name}}</p>
    <!-- <p>{{$route.params.goodid}}</p> -->
    <button @click="onClick">to vuerouter</button>
    <router-link to="/vue-router">vue-router</router-link>
    <!-- 提醒一下，当使用路由参数时，例如从 /user/foo 导航到 /user/bar，原来的组件实例会被复用。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。不过，这也意味着组件的生命周期钩子不会再被调用。

    复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：bwf -->
  </div>
</template>
<script>
export default {
  components: {},
  props: ["goodid"],
  data: function() {
    return {};
  },
  created: function() {
    console.log("123");
  },
  watch: {
    $route(newVal, oldVal) {
      console.log("newVal", newVal);
    }
  },
  methods: {
    onClick() {
     

      // this.$router.push('/keepAlive')
      // this.$router.push('/dynamic/960')
      // this.$router.push({name:'dynamic',params:{prdId:456}})
      // this.$router.push({name:'dynamic',params:{goodid:456}})
      // this.$router.push({path:'/dynamic',query:{prdId:123}})
    }
  }
};
</script>
<style>
</style>