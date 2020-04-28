<template>
  <div>
    <children :initialCounter='initialCounter'>
      <p>404</p>
    </children>
    <router-link to="/keepAlive">keepAlive</router-link>

    <p>testSlot</p>
    <testslot url="/profile"> 百度
      Clicking here will send you to: {{ url }}
    </testslot>
    <br>
    <br>

    <base-layout>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>
    <current-user>
      <template v-slot="slotProps">
        {{slotProps.user.lastname}}
      </template>

    </current-user>
  </div>
</template>
<script>
import children from "./children";
import testslot from "./testslot";
import baseLayout from "./layout.vue";
import currentUser from "./user.vue";
export default {
  components: {
    children,
    testslot,
    baseLayout,
    currentUser
  },
  props: [],
  data: function() {
    return {
      initialCounter: {},
      url: "http://www.baidu.com"
    };
  },
  created: function() {},
  methods: {}
};
</script>
<style>
</style>