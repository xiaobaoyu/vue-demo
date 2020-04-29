<template>
  <div>
    <h3>查询天气预报</h3>
    <input type="text"
           placeholder="请输入你要查询的城市"
           v-model="cityname"
           @change="getWeather">
    <p>日期:{{weatherInfo.date_y}}</p>
    <p>星期：{{weatherInfo.week}}</p>
    <p>气温:{{weatherInfo.temperature}}</p>
    <p>天气：{{weatherInfo.weather}}</p>
    <p>风向:{{weatherInfo.wind}}</p>
    <h3>深入响应式原理</h3>
    <button @click="addatri">增加一个obj的属性</button>
    {{obj}}
    <ul v-for="(v,i) in items"
        :key="i">
      <li>
        {{v}}
      </li>
    </ul>
  </div>
</template>
<script>
// import axios from "axios";
import api from "../../api/juhe.js";
export default {
  components: {},
  props: [],
  data() {
    return {
      cityname: "",
      // date_y: "",
      // week: "",
      // temperature: "",
      // weather: "",
      // wind: "",
      weatherInfo: {
        date_y: "",
        week: "",
        temperature: "",
        weather: "",
        wind: ""
      },
      obj: {
        name: "bwf"
      },
      items: ["a", "b", "c"],
    };
  },
  created() {
    this.getWeather();
    // this.items.length=0; 无效的
    // this.items.splice(0,3);

    this.$set(this.items, 3, "dd");
  },
  methods: {
    getWeather() {
      let that = this;
      api.reqweather({
        params: {
          cityname: that.cityname
        }
      })
        .then(res => {
          let today = res.result.today;
          //  console.log(today);
          // this.date_y = today.date_y;
          // this.week = today.week;
          // this.temperature = today.temperature;
          // this.weather = today.weather;
          // this.wind = today.wind;

          // Object.assign(this, today);
          // let { date_y, week, temperature, weather, wind } = this;

          // 推荐写法
          Object.assign(this.weatherInfo, today);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addatri() {
      // this.obj.age=18;
      // this.$set(this.obj,"age",18)
      this.obj = Object.assign({}, this.obj, { age: 18, sex: "女" });
      console.log("obj", this.obj);
    },
  },
  mounted() {
  }
};
</script>
<style>
</style>