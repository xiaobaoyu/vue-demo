<template>
  <div>
    ref
    <input type="text"
           ref="txtipt">
    <br>
    <input type="date">
    <br>

    <input type="text"
           ref='dateInput'>
    <ref-input ref="reference"></ref-input>
  </div>
</template>
<script>
// Pickday is not defined?bwf
import refInput from "./ref.vue";
import "pikaday/css/pikaday.css";
export default {
  components: {
    refInput
  },
  props: [],
  data: function() {
    return {};
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
      format: "YYYY/M/D",
      i18n: i18n //对默认的日期进行格式化，包括汉化
    });

    this.$once("hook:beforeDestroy", function() {
      //销毁控件所占资源
      picker.destroy();
    });
  },
  methods: {}
};
</script>
<style>
</style>