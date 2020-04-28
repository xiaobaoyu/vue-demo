<template>
  <div>
    function默认形参
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {

    };
  },
  created: function() {
    this.say("wmy", "{你好}", "吃饭了吗");
    let s = () => ({ name: "bwf" });
    console.log("s()", s());
    this.tryMet()
  },
  mounted(){
    let [...arr]  = [1,2,3]
    console.log('arr',arr);
  },
  methods: {
    say(name = "bwf", ...word) {
      console.log(`${name}${word}`);
    },
    tryMet() {
      try {
       console.log(eee);
       console.log('123');
       
      } catch(e) {
       console.log('456');
       
      }
    },
  }
};
</script>
<style>
</style>