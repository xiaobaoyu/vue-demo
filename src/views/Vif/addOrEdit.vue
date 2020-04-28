<template>
<div>
    <add v-if="page=='add'"></add>
    <edit v-else-if="page=='edit'"></edit>
 </div>
</template>
<script>
import add from './add'
import edit from './edit'
 export default {
 components: {
     add,
     edit
 },
props: [],
 data:function(){
 return{
     page:'edit'
 }
},
 created:function(){},
methods: {},
}
</script>
<style>
</style>