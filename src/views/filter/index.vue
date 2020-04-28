<template>
  <div>
    {{ date | formatDatetime('yyyy-MM-dd hh:mm') }}
    {{new Date().Format('yyyy-MM-dd hh:mm')}} --------
    {{ date | dateFormate('yyyy-MM-dd') }}

  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data: function() {
    return {
      date: new Date()
    };
  },
  filters: {
    formatDatetime(date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      }

      let obj = {
        "M+": date.getMonth() + 1,
        "d+": date.getDay(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
      };

      for (let key in obj) {
        if (new RegExp(`(${key})`).test(fmt)) {
          let str = obj[key] + "";
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
          );
        }
      }

      return fmt;
    }
  },
  created: function() {},
  methods: {
    // padLeftZero(str) {
    //   return ("00" + str).substr(str.length);
    // }
  }
};
</script>
<style>
</style>