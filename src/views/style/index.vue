<template>
<div class='parent'>
    <div :class="['bgr',{'bgy':isBgy}]" v-show="isBgy" ref='yellowDiv'>1232</div>
    <button @click='onClick' ref='clickMe'>点击我</button>
     <ul>
         <li v-for="item in 5" :key="item" @click="$router.push(`/style/${item}`)">{{item}}</li>
     </ul>
     <p>{{$route.params.id}}</p>
 </div>
</template>
<script>
 export default {
 components: {},
props: [],
 data:function(){
 return{
     isBgy:false,
 }
},
 created:function(){
     console.log('created--this.$refs.clickMe',this.$refs.clickMe);
     
 },
 mounted() {
   
    // this.$nextTick(()=>{
    //   this.$refs.clickMe.click()
    // })
     console.log('mounted--this.$refs.clickMe',this.$refs.clickMe);
 },
methods: {
    onClick(){
       
      console.log('onClick--this.$refs.clickMe',this.$refs.yellowDiv);
       this.isBgy = true
    }
},
}
</script>
<style>
div{
    width: 200px;
    height: 200px;
}
.bgr{
    background-color: red
}
.bgy{
    background-color: yellow;
}
</style>