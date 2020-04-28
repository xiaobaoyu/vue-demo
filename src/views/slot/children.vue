<template>
  <div>
    <div class="demo-alert-box">
      
      <strong>Error!</strong>
      <strong>badRequest <slot></slot></strong>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: ['initialCounter'],
  data: function() {
    return {
        initialCounterOther:{}
    };
  },
  created: function() {
      for (const key in this.initialCounter) {
          if (object.hasOwnProperty(key)) {
              const element = object[key];
              
          }
      }
  },
  methods: {}
};
</script>
<style>
</style>