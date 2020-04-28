<template>
<div>
    children
    <button @click="$emit('parentMet', 'children')">ddd</button>
 </div>
</template>
<script>
 export default {
 components: {},
props: [],
 data:function(){
 return{}
},
 created:function(){
    //  this.$emit('parentMet', 'children')
 },
methods: {},
}
</script>
<style>
</style>\