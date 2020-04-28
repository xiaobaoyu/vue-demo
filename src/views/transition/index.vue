<template>
  <div>
    transition
    <p>一：css过渡</p>
    <button @click='isShow = !isShow'>点击我</button>
    <div class='outerBox'>
      <transition name='show'>
        <div v-show="isShow"
             class='box'>456123</div>
      </transition>
    </div>
    <p>二：css动画</p>
    <button @click="show = !show">Toggle show</button>
    <transition name="bounce">
      <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    <p>三多个元素的过渡：v-if/v-else</p>
    <div class='tablebox'>
      <transition name="show">
        <table v-if="tableData.length">
          <thead>
            <td>日期</td>
            <td>姓名</td>
            <td>地址</td>
          </thead>
          <tbody>
            <tr v-for="(v,i) in tableData"
                :key="i">
              <td>{{v.date}}</td>
              <td>{{v.name}}</td>
              <td>{{v.address}}</td>
            </tr>
          </tbody>

        </table>
        <p v-else>Sorry, no items found.</p>
      </transition>
    </div>
    <p>四 key属性</p>
    <button @click='isEditing=!isEditing'>改变</button>
    <transition>
      <button v-if="isEditing"
              key="save">
        Save
      </button>
      <button v-else
              key="edit">
        Edit
      </button>
    </transition>

    <p> 五多个组件的过渡</p>
    <button @click='changeCom'>切换动态组件</button>
    <br>
    <transition name="component-fade"
                mode="out-in">
      <component v-bind:is="view"></component>
    </transition>
    <p>六列表的进入/离开过渡</p>
    <button v-on:click="add">Add</button>
    <button v-on:click="remove">Remove</button>
    <transition-group name="list"
                      tag="p">
      <span v-for="item in items"
            v-bind:key="item"
            class="list-item">
        {{ item }}
      </span>
    </transition-group>

  </div>
</template>
<script>
//  动画总结
// 1.做动画的元素 要v-show
// 2.transtion name
// 3.transtion + 外盒子（overflow：hidden）
// 4. v-enter(进入之前) v-enter-to（到哪儿） v-leave（将要离开） v-leave-to(离开之后)
// 5. v-enter  v-leave-to 设置transform等属性
// 6. v-enter-active v-leave-active transion

export default {
  components: {
    "v-a": {
      template: "<div>Component A</div>"
    },
    "v-b": {
      template: "<div>Component B</div>"
    }
  },
  props: [],
  data: function() {
    return {
      view: "v-a",
      isShow: true,
      show: true,
      isEditing: true,
      lists: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      tableData: [],
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  created: function() {
    this.myaxios().then(res => {
      //   console.log(999, res);
      this.tableData = res;
    });
  },
  methods: {
    myaxios() {
      let that = this;
      return new Promise(function(res, rej) {
        let data = that.lists;
        setTimeout(res, 2000, data);
      });
    },
    changeCom() {
      this.view = "v-a" ? "v-b" : "v-a";
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    }
  }
};
</script>
<style scoped lang='less'>
.outerBox {
  overflow: hidden;
}
.box {
  width: 200px;
  height: 100px;
  background-color: red;
}
.show-enter,
.show-leave-to {
  opacity: 0;
  /* transform: translateX(100px) */
}
.show-enter-active,
.show-leave-active {
  transition: all 1s;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.tablebox {
  text-align: center;
}
table {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
td {
  text-align: center;
  //   width: 50px;
  height: 50px;
  border: 1px solid #ccc;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>