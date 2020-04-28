<template>
  <div>
    <span>
      <slot  :user='user'>
          {{user.firstname}}
      </slot>
    </span>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {
      user: {
        firstname: "鲍",
        lastname: "伟芳"
      }
    };
  },
  created: function() {},
  methods: {}
};
</script>
<style>
</style>