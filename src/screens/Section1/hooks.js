import { useState, useEffect } from 'react'
import { getFilms, getUniqueFilm } from '../../services/api'

export const useFilms = () => {
  const [data, setData] = useState([])
  const [film, setFilm] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFilms()
        setData(response)
      } catch (error) {
        console.log('Error on fetch data hook')
      }
    }
    getData()
  }, [])

  const getFilm = async id => {
    try {
      const response = await getUniqueFilm(id)
      setFilm(response)
      console.log(film)
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    const id = e.target.value
    getFilm(id)
    console.log(film)
  }

  return [data, film, handleChange]
}
