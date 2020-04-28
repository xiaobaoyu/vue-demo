<template>
  <div>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {};
  },
  created: function() {
    Promise.all([this.getData1(),this.getData2(),this.getData3()]).then(([res1,res2,res3])=>{
    console.log(res1,res2,res3);
    
    })
  },
  methods: {
    getData1() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve(111), 1000);
      });
    },
    getData2() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve(222), 2000);
      });
    },
    getData3() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve(333), 2000);
      });
    }
  }
};
</script>
<style>
</style>