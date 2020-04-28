<template>
<div>
    <input type="text" @input="testInput">
 </div>
</template>
<script>
 export default {
 components: {},
props: ['value'],
 data:function(){
 return{}
},
 created:function(){
     console.log('bwf',this.value)
 },
methods: {
    testInput(e){
        this.$emit('input',e.target.value)
        console.log('bwf',this.bwf)
        
    }
},
}
</script>
<style>
</style>