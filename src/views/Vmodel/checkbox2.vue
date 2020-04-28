<template>
  <div>
    <input type="checkbox"
           v-bind:checked="checked"
           v-on:change="$emit('change', $event.target.checked)">
  </div>
</template>
<script>
export default {
  components: {},
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
<style>
</style>