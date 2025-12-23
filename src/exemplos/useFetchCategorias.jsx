import { useState, useEffect } from 'react'
import { fetcherCategorias } from '../api'

export default function useFetchCategorias() {
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState([])
  const [error, setError] = useState()

  const getCategorias = async () => {
    try {
      setLoading(true)
      const rs = await fetcherCategorias()
      setState(rs)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCategorias()
  }, [])

  return {
    loading,
    state,
    getCategorias,
    error
  }
}
