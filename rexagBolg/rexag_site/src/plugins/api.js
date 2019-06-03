import axios from 'axios';
// import store from '../store'

export default {
  login: (data) => {
    return axios.post('/login', data)
  },
  register: (data) => {
    return axios.post('/register', data)
  },
  checkPhone: (data) => {
    return axios.post('/checkPhone', data)
  },
  checkEmail: (data) => {
    return axios.post('/checkEmail', data)
  },
  checkUsername: (data) => {
    return axios.post('/checkUsername', data)
  },
  logout: () => {
    return axios.get('/user/logout')
  },
  changePwd: (data) => {
    return axios.post('/user/changePwd', data)
  },
  QuersyFirstMenu: () => {
    return axios.get('/firstmenu')
  },
  QuersySecondMenu: () => {
    return axios.get('/secondmenu')
  },
  GetarticlelistForHome: () => {
    return axios.get('/articleListForHome')
  },
  SaveArticle: (data) => {
    return axios.post('/user/saveArticle', data)
  },
  RefreshToken: () => {
    return axios.get('/user/refreshToken')
  }
}