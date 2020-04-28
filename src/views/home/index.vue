<template>
  <div>
    home
    <header>公用的头部</header>
    <input type="text">
    <router-view>

    </router-view>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      msg:'hello'
    };
  },
  created(){
    console.log("data",this.msg)
    console.log("el",this.$el)

  },
  mounted() {
    console.log("el",this.$el)
  },
  methods: {}
};
</script>
<style>
@import url(./index.less);
</style>