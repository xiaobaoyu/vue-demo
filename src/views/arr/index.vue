<template>
  <div>
    <ul>
      <li v-for="(item,i) in list"
          :key='i'>{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,key,i) in userInfo"
          :key='i'>{{item}}</li>
    </ul>
    <ul>
      <template v-for="(item) in otherList">
        <li>{{item.name}}</li>
        <li>--------</li>
      </template>
    </ul>
    <button @click='onClick'>点击我</button>
    <div>
      <span v-for="n in 10">{{ n }} </span>
    </div>
  </div>
</template>
<script>
// 由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
// 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
// 当你修改数组的长度时，例如：vm.items.length = newLength
export default {
  components: {},
  props: [],
  data: function() {
    return {
      list: [1, 2, 3, 4],
      userInfo: {
        name: "bwf"
      },
      otherList: [
        { name: "bwf1" },
        { name: "bwf2" },
        { name: "wmy1" },
        { name: "wmy2" }
      ]
    };
  },
  created: function() {},
  methods: {
    onClick() {
      //  this.list[0]=0
      //  console.log('this.list[0]=0',this.list);

      // this.userInfo.age = '18'
      // console.log('userinfo',this.userInfo)
      this.userInfo = Object.assign({}, this.userInfo, { age: 18, sex: "man" });
      this.$set(this.list, 0, 0);
    }
  }
};
</script>
<style>
</style>