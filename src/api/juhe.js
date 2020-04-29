import axios from "./request"
const baseApi = '/api'
// const reqweather = (params) => {
//   return  axios.get(`${baseApi}/weather/index`, params)
// }
// export default reqweather

export default {
  reqweather: (params) => {
    return axios.get(`${baseApi}/weather/index`, params)
  }

}

