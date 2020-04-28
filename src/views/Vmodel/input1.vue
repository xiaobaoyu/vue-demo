<template>
  <div class='defineBox'>
    <div class='box leftbox'
         @click="plus">+</div>
    <!-- <div class='box middlebox'> -->
    <input type="nubmer"
           class='box'
           @input="$emit('input', $event.target.value)"
           :value="num">
    <!-- </div> -->
    <div class='box rightbox'
         @click="sub">-</div>
  </div>

</template>
<script>
// num is not defined
export default {
  components: {},
  props: ["value"],
  data: function() {
    return {
      num: this.value
    };
  },
  created: function() {},
  computed: {},
  methods: {
    // onInput() {
    //   this.$emit("input");
    // },

    plus() {
      this.num += 1;
      console.log(num);
    },
    sub() {
      this.num -= 1;
      console.log(num);
    }
  },
  watch: {
    num: {
      handler(newName, oldName) {
        // console.log("newName", newName);
        this.num = newName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  }
};
</script>
<style scoped lang='less'>
.defineBox {
  margin-bottom: 50px;
}
.box {
  float: left;
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  margin-right: 10px;
}
</style>