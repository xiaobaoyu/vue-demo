<template>
  <div>
    <label :for="item.id"
           v-for="(item,i) in value"
           :key="i">
      {{item.value}}
      <input type="checkbox"
             :name="item.name"
             :id="item.id"
             :value="item.value"
             @change="$emit('change',$event.target.value)">
    </label>
    <!-- <label for="1">
        看书：
        <input type="checkbox" name='read' value="看书" id='1'>
    </label>
    <br>
    <label for="2">
        玩：
        <input type="checkbox" name='play' value="玩" id='2'>
    </label> -->
    <!-- <div class='test'></div> -->

  </div>
</template>
<script>
export default {
  components: {},
  props: ["value"],
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
<style scoped lang='less'>
input[type="checkbox"] {
  position: relative;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  outline: none;
}
input[type="checkbox"]::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 60%;
  background-color: #fff;
  //   box-sizing: content-box;
  //   content: "";
  //   border: 1px solid red;
  //   border-left: 0;
  //   border-top: 0;
  //   width: 15px;
  //   height: 15px;
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%,-50%);
  //   transform: rotate(45deg) scaleY(0);
  //   transition: transform 0.15s ease-in 0.05s;
  //   transform-origin: center;
}
input[type="checkbox"]:checked {
  background-color: #409eff;
}

// .test {
//   margin-left: 20px;
//   height: 7px;
//   width: 3px;
//   border: 1px solid red;
//   border-left: 0;
//   border-top: 0;
//   transform: rotate(45deg);
//   transform-origin: center;
// }
</style>