<template>
  <div>
    <a v-bind:href="url"
       class="nav-link">
      <slot></slot>
    </a>
  </div>
</template>
<script>
export default {
  components: {},
  props: [
    
  ],
  data: function() {
    return {
        url:'http://www.baidu.com'
    };
  },
  created: function() {},
  methods: {}
};
</script>
<style>
</style>