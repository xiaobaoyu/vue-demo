<template>
  <div>
    <h3>far</h3>
    <input type="text"
           v-model="inp">
    <br>
    <son :msg='userInfo'
         @sendtofarattr="sendtofar"
         ref='sonComponent'>></son>
    这是子传递给父的数据{{msffromson}}
    <br>
    <button @click="onClick">重置</button>
  </div>
</template>
<script>
import son from "./son";
export default {
  components: {
    son
  },
  props: [],
  data: function() {
    return {
      userInfo: {
        name: "bwf"
      },
      msffromson: "",
      inp: ""
    };
  },
  created: function() {
    console.log(this.msg);
  },
  methods: {
    sendtofar(data) {
      this.msffromson = data;
    },
    onClick() {
      this.inp = "";
      this.$refs.sonComponent.reset();
    }
  }
};
</script>
<style>
</style>