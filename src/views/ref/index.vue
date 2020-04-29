<template>
  <div>
    <h3>ref</h3>
    普通文本款：<input type="text"
           ref="txtipt" v-model="msg">
    <br>
    引入的自定义文本框：
    <ref-input ref="reference1"></ref-input>
    <ref-input ref="reference2"></ref-input>
    <ref-input ref="reference3"></ref-input>
    <br>
    日期选择框：<input type="date">
    <br>
    挂载日期选择器：<input type="text"
           ref='dateInput'>
    <br>
    <button @click="clearAll">一键清空</button>

  </div>
</template>
<script>
// Pickday is not defined?bwf
import refInput from "./ref.vue";
import "pikaday/css/pikaday.css";
import Pikaday from "pikaday";
export default {
  components: {
    refInput
  },
  props: [],
  data: function() {
    return {
      msg:"",
      // defineMsg:""
    };
  },
  created: function() {},
  mounted() {
    this.$refs.txtipt.focus();
    console.log(this.$refs.txtipt, this.$refs.reference);

    let i18n = {
      // 需要在程序中进行定义，才可以进行汉化
      previousMonth: "上个月",
      nextMonth: "下个月",
      months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ],
      weekdays: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      weekdaysShort: ["日", "一", "二", "三", "四", "五", "六"]
    };

    var picker = new Pikaday({
      field: this.$refs.dateInput, //绑定日期插件的input对象
      format: "YYYY/MM/DD",
      i18n: i18n //对默认的日期进行格式化，包括汉化
    });

    this.$once("hook:beforeDestroy", function() {
      //销毁控件所占资源
      picker.destroy();
    });
  },
  methods: {
    clearAll(){
      this.msg="",
      // 父组件中调用子组件的方法
      this.$refs.reference1.sonClear()
      this.$refs.reference2.sonClear()
      this.$refs.reference3.sonClear()

      // this.$refs.reference1.inpmsg=""
      // this.$refs.reference2.inpmsg=""
      // this.$refs.reference3.inpmsg=""
    },
  }
};
</script>
<style>
</style>