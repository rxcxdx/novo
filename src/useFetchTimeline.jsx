import { useState, useEffect } from 'react'
import { fetcherTimeline } from './api'

export default function useFetchTimeline() {
  const [state, setState] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)


  const retry = async () => {
    try {
      setLoading(true)
      const rs = await fetcherTimeline()
      setState(rs)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    retry()
  }, [])

  return {
    state,
    retry: retry,
    error,
    loading
  }
}
