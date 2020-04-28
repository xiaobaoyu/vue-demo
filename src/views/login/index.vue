<template>
  <div>
    <h3>login页面</h3>
    <button @click="onClick">消息提示</button>
    <p>{{message}}</p>
  </div>
</template>
<script>
// 局部使用message组件
import message from "../message/index.js";
export default {
  components: {},
  props: [],
  data: function() {
    return {
      message: "未更新"
    };
  },
  created: function() {},
  methods: {
    onClick() {
      //this.$message.show('bwf')
      message.show("bwf");
    },
    updateMessage:async function() {
    //   this.message = "已更新";
    //   console.log(this.$el.textContent); // => '未更新'
    //   this.$nextTick(function() {
    //     console.log(this.$el.textContent); // => '已更新'
    //   });

    this.message = '已更新'
    console.log(this.$el.textContent) // => '未更新'
    await this.$nextTick()
    console.log(this.$el.textContent) // => '已更新'
    }
  },
  mounted() {
    this.updateMessage();
  }
};
</script>
<style>
</style>