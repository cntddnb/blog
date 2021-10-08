import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://myblog-e6670-default-rtdb.firebaseio.com',
  timeout: 3000
})
instance.interceptors.request.use(res => {
  return res
})
instance.interceptors.response.use(
  res => {
    const { status, data: blog } = res
    if (status !== 200) return res
    return blog
  },
  err => {
    return Promise.reject(new Error(err))
  }
)
export default instance
