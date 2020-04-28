<template>
  <div>
    <button @click="onClick">提交</button>
    promise
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
    new Promise((resolve, reject) => {
      setTimeout(() => {
        let res = { data: { name: "bwf" } };
        resolve(res);
      }, 1000);
    }).then(res=>{
        console.log('res',res);
        
    })
  
  },
  methods: {
   onClick(){

   }
  }
};
</script>
<style>
</style>
