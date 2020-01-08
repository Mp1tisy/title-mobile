import axios from 'axios'
import jsonbigint from 'json-bigint'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

request.defaults.transformResponse = [
  function (data) {
    try {
      return jsonbigint.parse(data)
    } catch (err) {
      console.log('转换失败', err)
      return {}
    }
  }
]

export default request
