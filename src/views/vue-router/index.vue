<template>
  <div>
    <router-link :to="{path:'/dynamic/123',query:{name:'test'}}">123</router-link>
    <router-link to="helloworld">helloworld</router-link>
    <!-- 列表页 -->
    <h5>商品列表页</h5>
    <ul v-if="goodlists.length">
      <li v-for="(item,i ) in goodlists"
          :key="i">
        <router-link :to="{path:'dynamic/'+item.id,query:{name:item.name}}">
          {{item.name}}--{{item.price}}
        </router-link>
      </li>
      <button @click="onClick">编程式导航</button>
      <p>命名视图</p>
      <router-view class="view one"></router-view>
      <router-view class="view two"
                   name="a"></router-view>
      <router-view class="view three"
                   name="b"></router-view>

    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {
      goodlists: [
        { id: 1, name: "good1", price: "10$" },
        { id: 2, name: "good2", price: "20$" },
        { id: 3, name: "good3", price: "30$" }
      ]
    };
  },
  created: function() {},
  methods: {
    onClick() {
      let goodid = 456;
      // 如果提供了 path，params 会被忽略
      //   this.$router.push({path:'/dynamic'},{params:123})  //onComplete is not a function
      // 一
      //   this.$router.push({path:'/dynamic/123'})
      //   this.$router.push('/dynamic/123')
      this.$router.push(`/dynamic/${goodid}`);
      // 二
      // this.$router.push({name:'dynamic',params:{goodid:123}})
    }
  }
};
</script>
<style>
</style>