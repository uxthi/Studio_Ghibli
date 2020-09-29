import { useState, useEffect } from 'react'
import { getFilms, getUniqueFilm } from '../../services/api'

export const useFilms = () => {
  const [films, setFilms] = useState([])
  const [uniqueFilm, setUniqueFilm] = useState('')

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getFilms()
        setFilms(response)
      } catch (error) {
        console.log('Error fetching films')
      }
    }
    getData()
  }, [])

  const getFilm = async id => {
    try {
      const response = await getUniqueFilm(id)
      setUniqueFilm(response)
    } catch (err) {
      console.log('Error fecthing film by id')
    }
  }

  const handleChange = e => {
    const id = e.target.value
    getFilm(id)
  }

  return [films, uniqueFilm, handleChange]
}
