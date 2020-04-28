<template>
  <div>
    <h4>son</h4>
    <div>这是从far传递过来的数据{{msg}}{{otherInfo}}</div>
    <button @click='sendtofar'>点击向far传递消息</button>
    <button @click="changeMsg">点击改变父组件传过来的值</button>
    <input type="text"
           v-model="inp1">
  </div>
</template>
<script>
export default {
  components: {},
  props: ["msg"],
  data: function() {
    return {
      inp1: "wmy",
      otherInfo: JSON.parse(JSON.stringify(this.msg))
    };
  },
  created: function() {},
  methods: {
    sendtofar() {
      console.log(111);
      this.$emit("sendtofarattr", "hello,i am son");
    },
    changeMsg() {
      this.otherInfo.name = "zhangsan";
    },
    say() {
      console.log("say Wmy");
    },
    reset() {
      this.inp1 = "";
    }
  }
};
</script>
<style>
</style>