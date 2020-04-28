<template>
<div>
    b
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click='onClick'>点击我</button>
    <A></A>
 </div>
</template>
<script>
import A from './A.vue'
import {mapState, mapMutations, mapActions} from 'vuex'
 export default {
 components: {
     A
 },
props: [],
 data:function(){
 return{}
},
computed:{
    // otherName(){
    //     return this.$store.state.name
    // }
    ...mapState('A',['name','age'])
},
 created:function(){
     
 },
methods: {
      ...mapMutations('A',['changeName']),
      ...mapActions('A',['changNameAsync']),
      onClick(){
          this.changNameAsync()
      }

},
}
</script>
<style>
</style>