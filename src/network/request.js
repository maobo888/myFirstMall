import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000,
    headers:{}
  })

  // 2.axios的拦截器
  // 2.1 请求拦截
  // instance.interceptors.request.use(config => {
  //   // 1.比如config中的一些信息不符合服务器的要求
  //
  //   // 2.比如每次发送网络请求时，在界面中显示请求图标
  //
  //   // 3.某些网络请求(比如登陆(token))，必须携带一些特殊的信息
  //   return config
  // }, error => {
  //   console.log(error);
  // })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  }, error => {
    console.log(error);
  })

  // 3.发送真正的网络请求
  return instance(config)
}
