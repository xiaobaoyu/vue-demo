<template>
<div>
    <children @parentMet='parentMet'></children>
 </div>
</template>
<script>
import children from './children'
 export default {
 components: {
     children
 },
props: [],
 data:function(){
 return{}
},
 created:function(){},
methods: {
    parentMet(data){
       console.log('data', data);
       
    }
},
}
</script>
<style>
</style>