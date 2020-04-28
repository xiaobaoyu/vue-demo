<template>
<div>
    a
    <p>{{otherName}}</p>
    <!-- <p>{{$store.state.name}}</p> -->
    <button @click='onClick'>点击我</button>
    <B></B>
 </div>
</template>
<script>
import B from './B.vue'
 export default {
 components: {
     B
 },
props: [],
 data:function(){
 return{}
},
computed:{
    otherName(){
        return this.$store.state.A.name
    }
},
 created:function(){},
methods: {
onClick(){
    this.$store.commit('A/changeName', 'wmy')
    // this.$store.dispatch('changNameAsync')
}
},
}
</script>
<style>
</style>