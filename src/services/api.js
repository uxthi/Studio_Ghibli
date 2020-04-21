import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
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
      console.log('no token found')
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
      console.log('erro 401')
    }
    return Promise.reject(error)
  }
)

//// REQUESTS

// GET ALL FILMS
export const getFilms = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/films`)
      resolve(data)
    } catch (err) {
      reject(err)
      console.log('Error fetching films list')
    }
  })
}

// GET UNIQUE FILM
export const getUniqueFilm = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await api.get(`/films/${id}`)
      resolve(data)
    } catch (err) {
      reject(err)
      console.log('Error fetching films list')
    }
  })
}
