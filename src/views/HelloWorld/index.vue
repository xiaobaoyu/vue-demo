<template>
  <div>
    <div class='side-nav'>
      <ul v-if="lists.length"
          :class='{first:lists.length}'>
        <li v-for="(item,i) in lists"
            :key="i">我是一级菜单：{{item.name}}
          <ul v-if="item.children"
              :class='{second:item.children}'>
            <li v-for="(childItem,i) in item.children"
                :key="i">我是二级菜单：{{childItem.name}}
              <ul v-if="childItem.children"
                  :class='{third:childItem.children}'>
                <li v-for="(childChildItem,i) in childItem.children"
                    :key="i">我是三级菜单：{{childChildItem.name}}
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>

    </div>

    <router-link to="/bwf">{{isTrue ? trueMet() : falseMet()}}</router-link>
    <todo-item :parentData="age"></todo-item>

    <div>
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>

    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>
    <!-- 按键修饰符 -->
    <input type="text"
           @keyup.space='submit'>
    <br><br>
    <p>vue原理</p>
    {{per}}

    <p v-html="test"></p>
    <input type="text"
           v-model="form">
    <input type="text"
           v-model="form">
    <button @click="changeValue">改变值</button>
    {{form}}
    <p style='color:red' class='pbox' ref='pbox'>我事p标签里面的内容</p>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      timerId: null,
      age: 13,
      isTrue: false,
      lists: [
        {
          name: "1",
          children: [
            { name: "1-1", children: [{ name: "1-1-1" }] },
            { name: "1-2", children: [{ name: "1-2-1" }] }
          ]
        },
        {
          name: "2",
          children: [{ name: "2-1", children: [] }]
        },
        {
          name: "3",
          children: [
            { name: "3-1", children: [{ name: "3-1-1" }] },
            { name: "3-2", children: [{ name: "3-2-1" }] }
          ]
        }
      ],
      message: "页面加载于 " + new Date().toLocaleString(),
      per: {
        name: "bwf"
      },
      test: "<strong>我是粗体</strong>",
      form: "这是form的值"
      // boolean:true
    };
  },
  created() {
    // console.log("data");
    let obj = this.per;
    let age = 28;
    Object.defineProperty(obj, "age", {
      enumerable: true, // 可枚举
      configurable: true, // 不能再define
      get() {
        return age;
      },
      set(newVal) {
        console.log("我改变了", age + " -> " + newVal);
        age = newVal;
      }
    });
    obj.age = 30;
   
  },
  mounted() {
    // let pbox=document.querySelector('.pbox')
    let pbox=this.$refs.pbox;
    let text =this.$refs.pbox.innerText;
    console.log(pbox.attributes.style.nodeType)
    console.log('pnode',pbox.nodeType,'text',text.nodeName )
  },
  methods: {
    trueMet() {
      console.log("trueMet");
      return "trueMet";
    },
    falseMet() {
      console.log("falseMet");
      return "falseMet";
    },
    warn: function(message, event) {
      console.log("event", event);
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
    submit() {
      console.log("submit");
    },
    changeValue() {
      console.log(this.form);
      this.form = "值被我改变了，气不气？";
    }
  },
  destroyed() {
    clearInterval(this.timerId);
  }
};
</script>
<style scoped lang='less'>
@import "./index.less";
</style>