<template>
  <div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <br>
    <button @click="toggle">toggle login type</button>
    <br>
    <router-link to="/addOrEdit">addOrEdit</router-link>
 </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {
        loginType:'username'
    };
  },
  created: function() {},
  methods: {
      toggle(){
          if(this.loginType=='username'){
              this.loginType=''
          }else{
              this.loginType='username'
          }
      }
  }
};
</script>
<style>
</style>