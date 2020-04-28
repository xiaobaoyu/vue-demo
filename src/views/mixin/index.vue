<template>
  <div>
    混入mixin
    {{message}}{{foo}}
    自定义指令
    <p>
      bind：只调用一次，在指令第一次绑定到元素上时调用
      <br>
      update： 在 bind 之后立即以初始值为参数第一次调用，之后每当绑定值变化时调用，参数为新值与旧值。
      <br>
      unbind：只调用一次，在指令从元素上解绑时调用。
    </p>
    <input type="text"
           v-focus>
    {{new Date().Format('yyyy-MM-dd hh:mm')}}

    <div v-demo></div>
  </div>
</template>
<script>
import myMixin from "../minin.js";
export default {
  mixins: [myMixin],
  directives: {
    focus: {
      inserted(el, binding, vnode, oldVnode) {
        console.log("el", el);
        console.log("binding", binding);
        console.log("vnode", vnode);
        console.log("oldVnode", oldVnode);
        el.focus();
      }
    },
    demo: {
      bind: function() {
        console.log("demo bound!");
      },
      update: function(el) {
        this.el.innerHTML =
          "name - " +
          this.name +
          "<br>" +
          "expression - " +
          this.expression +
          "<br>" +
          "argument - " +
          this.arg +
          "<br>" +
          "modifiers - " +
          JSON.stringify(this.modifiers) +
          "<br>" +
          "value - " +
          value;
      }
    }
  },
  components: {},
  props: [],
  data: function() {
    return {
      message: "goodbye",
      bar: "def",
    };
  },
  created: function() {},
  methods: {}
};
</script>
<style>
</style>