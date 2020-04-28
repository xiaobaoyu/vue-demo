<template>
<div class='container'>
    <my-products></my-products>
    <my-cart></my-cart>
 </div>
</template>
<script>
import myProducts from './products.vue'
import myCart from './cart.vue'
 export default {
 components: {
     myProducts,
     myCart
 },
props: [],
 data:function(){
 return{}
},
 created:function(){},
methods: {},
}
</script>
<style>
</style>