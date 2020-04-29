<template>
  <div>
    <input type="text"
           placeholder="define"
           v-model="inpmsg"
           >
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {
        inpmsg:""
    };
  },
  created: function() {
    // console.log(`toSon,${defineMsg}`);
  },
  methods: {
    sonClear(){
       this.inpmsg=""
    }
  },
  computed: {
    // defineMsg() {
    //   let defineMsg = this.toSon;
    //   return defineMsg;
    // }
  }
};
</script>
<style>
</style>