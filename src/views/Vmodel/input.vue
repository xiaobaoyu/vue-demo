<template>
<div>
    <input type="text" @input='onInput'>
 </div>
</template>
<script>
 export default {
 components: {},
props: ['value'],
 data:function(){
 return{}
},
 created:function(){},
methods: {
    onInput(e){
       console.log('e',e.target.value);
       this.$emit('input',e.target.value) 
    }
},
}
</script>
<style>
</style>\