import axios from 'axios'

const api = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com'
})


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
