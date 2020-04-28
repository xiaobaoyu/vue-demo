//请求拦截器
axios.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        console.log("reqconfig",config)
        config.params.key="283834be08fd8b3ce44ac87b2bd48617"
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
  );
  
  //响应拦截器
  axios.interceptors.response.use(
    function (config) {
        // 对响应数据做点什么
        console.log("respconfig",config)
        let res=config.data;
        return res;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
  );

  export default axios;

   