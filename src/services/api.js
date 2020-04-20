import axios from 'axios'
import { ROOT_URL } from '../constants'

const api = axios.create({
  baseURL: ROOT_URL
})

export const logout = () => {
  localStorage.clear()
  window.location.href = ''
}

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    } else {
      logout()
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      logout()
    }
    return Promise.reject(error)
  }
)
