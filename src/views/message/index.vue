<template>
<div class='message' v-if="isShow" @click="hide">
    <div class='content'>{{tips}}</div>
 </div>
</template>
<script>
 export default {
 components: {},
props: [],
 data:function(){
 return{
     isShow:false,
     tips:'消息提示'
 }
},
 created:function(){},
methods: {
    show(params){
        this.isShow = true
        this.tips= params
    },
    hide(){
        this.isShow = false
    }
},
}
</script>
<style>
.message{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.1)
}
.content{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    border-radius: 8px;
    padding: 10px 16px;
}
</style>