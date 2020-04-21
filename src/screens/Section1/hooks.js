import { useState, useEffect } from 'react'
import { getFilms } from '../../services/api'

export const useFilms = () => {
  const [data, setData] = useState([])

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

  return [data]
}
