<template>
  <div class='container'>
    <header>
         <slot name="header"></slot>
    </header>
    <main>
         <slot name="main"></slot>
    </main>
    <footer>
         <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
<style>
</style>