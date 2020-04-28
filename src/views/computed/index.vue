<template>
  <div id="example">
    <input type="text "
           v-model="message">
    <button @click='onClick'>点击</button>
    <p>Computed reversed message: "{{reversedMessage }}</p>
    <p>
      Ask a yes/no question:
      <input v-model="question">
    </p>
    <p>{{ answer }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      message: "bwfwmy",
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  //   1.计算属性 执行条件 用到它+值改变（或者首次）
  //   2.计算属性 应用于一个或某个值计算出值
  //   3.计算属性 不要重命名在data里面
  computed: {
    reversedMessage() {
      console.log("computed");
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    message: {
      handler(newName, oldName) {
        console.log("newName", newName);
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    },
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },

  methods: {
    onClick() {
      console.log("456", this.reversedMessage);
    },
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
};
</script>
<style>
</style>