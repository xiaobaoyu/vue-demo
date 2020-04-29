<template>
  <div class='defineBox'>
    <div class='box leftbox'
         @click="plus">+</div>
    <!-- <div class='box middlebox'> -->
    <input type="nubmer"
           class='box'
           @input="$emit('input', $event.target.value)"
           :value="value">
    <!-- </div> -->
    <div class='box rightbox'
         @click="sub">-</div>
  </div>

</template>
<script>
export default {
  components: {},
  props: ["value", "max", "min", "step"],
  data: function() {
    return {
      num: this.value
    };
  },
  created: function() {
    console.log(this.num, "num");
  },
  computed: {},
  methods: {
    // onInput() {
    //   this.$emit("input");
    // },

    plus() {
      if (this.num <= this.max - this.step) {
        this.num += this.step;
      } else {
        this.num = this.max;
      }
      this.$emit("input", this.num);
    },
    sub() {
      if (this.num >= this.min + this.step) {
        this.num -= this.step;
      } else {
        this.num = this.min;
      }
      this.$emit("input", this.num);
    }
  },
  watch: {
    num: {
      handler(newName, oldName) {
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