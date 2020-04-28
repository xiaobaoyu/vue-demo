<template>
  <div>
    <p>自定义input输入框</p>
    <p>{{name}}</p>
    <my-input :value='name'
              @input='OnInput'></my-input>
    <my-input v-model="name"></my-input>
    <p>表单输入绑定</p>
    <p>v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：</p>
    <p> text 和 textarea 元素使用 value 属性和 input 事件；<br>
      checkbox 和 radio 使用 checked 属性和 change 事件；<br>
      select 字段将 value 作为 prop 并将 change 作为事件。</p>
    <label for="txt">
      文本：<input type="text"
             name=""
             id="txt"
             v-model="message">
      {{message}}
    </label>
    <br>
    <span>单选框:</span>

    <label for="">
      读书：
      <input type="radio"
             v-model="checked"
             value="reading">
    </label>
    <label for="">
      运动：
      <input type="radio"
             v-model="checked"
             value="exercise">
    </label><br>
    <span>被选中的是{{checked}}</span>
    <br>
    <span>单个复选框</span>
    <br>
    <label for="">
      读书：<input type="checkbox"
             name=""
             id=""
             value='box'
             v-model='checkedf1'>
    </label>
    {{checkedf1}}
    <br>
    <label for="">
      运动：<input type="checkbox"
             name=""
             id=""
             value="play"
             v-model="checkedf2">
    </label>
    {{checkedf2}}
    <br>

    <span>多个复选框</span>
    <br>
    <label for="">
      读书：<input type="checkbox"
             name=""
             id=""
             value='box'
             v-model='checkedArr'>
    </label>
    <br>
    <label for="">
      运动：<input type="checkbox"
             name=""
             id=""
             value="play"
             v-model="checkedArr">
    </label>
    {{checkedArr}}
    <br>
    <span>select选择框</span><br>
    <select name=""
            id=""
            v-model="selectedOptions"
            multiple>
      <option value="11">11</option>
      <option value="22">22</option>
      <option value="33">33</option>
    </select>
    <br>
    {{selectedOptions}}
    <br>
    <span>动态渲染的列表选项</span>
    <br>
    <select name=""
            id=""
            v-model="dynamicOp">
      <option :value="item.value"
              v-for="(item ,i) in options"
              :key="i">{{item.text}}</option>
    </select>
    {{dynamicOp}}
    <br>
    <p>我的自定义输入框</p>
    <define-input :value='inputVal'
                  @input="OnInput2"></define-input>
    <define-input v-model="inputVal"></define-input>
    <br>
    <p>ceshi</p>
    <test :value='bwf'
          @input="bwfInput"></test>
    {{bwf}}

    <p>自定义checkbox</p>
    <my-checkbox :value='checkboxval'
                 @change="checkInput"></my-checkbox>

    <base-checkbox v-model="lovingVue"></base-checkbox>
    {{lovingVue}}

  </div>
</template>
<script>
import myInput from "./input";
import defineInput from "./input1.vue";
import test from "./input2.vue";
import myCheckbox from "./checkbox.vue";
import baseCheckbox from "./checkbox2.vue";
export default {
  components: {
    myInput,
    defineInput,
    test,
    myCheckbox,
    baseCheckbox
  },
  props: [],
  data() {
    return {
      name: "",
      message: "",
      checked: "",
      checkedf1: "",
      checkedf2: "",
      checkedArr: [],
      selectedOptions: [],
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ],
      dynamicOp: "",
      inputVal: 0,
      bwf: "123",
      checkboxval: [
        { name: 1, value: "eat", checked: false, id: 1 },
        { name: 2, value: "sleep", checked: false, id: 2 },
        { name: 3, value: "play", checked: false, id: 3 }
      ],
      lovingVue:false
    };
  },
  created: function() {},
  methods: {
    OnInput(data) {
      this.name = data;
    },
    OnInput2(data) {
      this.inputVal = data;
    },
    bwfInput(data) {
      this.bwf = data;
    },
    checkInput(data) {
      this.checkboxval.checked = data.value;
    }
  }
};
</script>
<style>
</style>