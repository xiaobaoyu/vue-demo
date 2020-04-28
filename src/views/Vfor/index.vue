<template>
  <div>
    Vfor
    <div>
      <input type="text"
             v-model="name">
      <button @click="add">添加</button>
    </div>
    <ul>
    <li v-for="(item, i) in list" :key="item.id">
      <input type="checkbox">{{i}}- {{item.name}}
    </li>
    </ul>

  </div>
</template>
<script>
// v-for 加key改变diff算法的默认行为，提高遍历的效率
export default {
  components: {},
  props: [],
  data: function() {
    return {
      name: "",
      newId: 3,
      list: [
        { id: 1, name: "李斯" },
        { id: 2, name: "吕不韦" },
        { id: 3, name: "嬴政" }
      ]
    };
  },
  created: function() {},
  methods: {
    add() {
      //注意这里是unshift
      this.list.unshift({ id: ++this.newId, name: this.name });
      this.name = "";
    }
  }
};
</script>
<style>
</style>