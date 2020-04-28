<template>
  <div class="todoPage">
    <div class='container'>
      <h3 class='title'>
        <span>todolist</span>
        <input type="text"
               placeholder="添加todo"
               @keyup.enter="add"
               v-model='thing'>
      </h3>
      <div class='doing-box'>
        <p>
          <span>正在进行</span>
          <span>计数：{{doingCount}}</span>
        </p>
        <ul v-if="doingLists.length">
          <li v-for="(item,i) in doingLists"
              :key="item.id">
            <input type="checkbox"
                   name=""
                   id=""
                   v-model="item.checked"
                   @change="doTodone(item,i)">
            {{item.checked}}
            index:{{i}};id:{{item.id}}-- {{item}}
            <button @click="deleteItem('doing',i)">remove</button>
          </li>
        </ul>
      </div>
      <div class='done-box'>
        <p>
          <span>已经完成</span>
          <span>计数{{doneCount}}</span>
        </p>
        <ul v-if="doneLists.length">
          <li v-for="(item,i) in doneLists"
              :key="item.id">
            <input type="checkbox"
                   name=""
                   id=""
                   v-model="item.checked"
                   @change="todoing(item)">
            {{item.checked}}
            index:{{i}};id: {{item.id}}--{{item}}
            <button @click="deleteItem('done',i)">remove</button>
          </li>
        </ul>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {
      thing: "",
      thingId: 0,
      checked: false,
      doingLists: [],
      doneLists: [],
      doingCount: 0,
      doneCount: 0
    };
  },
  created: function() {},
  methods: {
    add() {
      this.doingLists.push({
        id: ++this.thingId,
        thing: this.thing,
        checked: false
      });
      this.thing = "";
      this.doingCount++;
    },
    doTodone(item, i) {
      if (this.doneLists.lenght == 0) {
        this.doneLists = this.doingLists.filter(v => v.checked);
      } else {
        this.doneLists.push(this.doingLists.filter(v => v.checked));
      }
      this.doingLists.splice(i, 1);
      this.doingCount -= 1;
      this.doneCount += 1;
    },
    todoing(item) {},
    deleteItem(diff,i) {
      if (diff == "doing") {
        this.doingLists.splice(i, 1);
        this.doingCount-=1;
      } else {
        this.doneLists.splice(i, 1);
        this.doneCount-=1;
      }
    }
  }
};
</script>
<style scoped lang='less'>
.todoPage {
  .container {
    width: 1000px;
    margin: 10px auto;
  }
}
.doing-box ul {
}
</style>