import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 5000
})

// service.interceptors.request.use((config) => {

// })

service.interceptors.response.use((response) => {
  const { data } = response
  return data
}, (e) => {
  return Promise.reject(e)
})

export default service
