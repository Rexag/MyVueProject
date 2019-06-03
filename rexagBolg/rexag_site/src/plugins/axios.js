import axios from 'axios'
function Axios () {

}
Axios.install = function () {
  axios.defaults.baseURL = 'http://127.0.0.1:9699/'; // 全局的地址，因为我的koa监听端口是3000， 这里可以按照大家自己的来配置
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  // 请求拦截器
  axios.interceptors.request.use((data) => {
    return data
  }, function (error) {
    return Promise.reject(error);
  })
  // 返回拦截器
  axios.interceptors.response.use(res => {
    let token = res.data.token;
    if (token && token !== 'null') {
      token && localStorage.setItem('token', token);
    }
    return res
  });
}


export default Axios;
