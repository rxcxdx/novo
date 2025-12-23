import { del } from 'object-path-immutable'
import { Link } from 'react-router'
import useFetchTimeline from './useFetchTimeline'
import { map, truncate } from 'lodash-es'
import { useState } from 'react'
import { mutateApagarVendas } from './api'
import { toast } from 'sonner'
import Skeleton from 'react-loading-skeleton'


export function Timeline() {
  const { state, retry, error,loading } = useFetchTimeline()
  const [joker, setJoker] = useState([])
  if (error) throw error
  const toggle = (_id) => {
    const i = joker.indexOf(_id)
    i >= 0 ? setJoker(del(joker, i)) : setJoker([...joker, _id])
  }
  const apagar = async () => {
    try {
      await mutateApagarVendas(joker)
      toast.success('sucesso apagar')
      setJoker([])
      retry()
    } catch (e) {
      toast.error(e.message)
    }
  }

  if (loading) return <Skeleton count={10} width='250px'/>

  return (
    <div>
      

      <div className="d-flex gap-1">
        <span role="button" className="text-danger" onClick={apagar}>
          apagar
        </span>
        <span
          role="button"
          onClick={() => {
            setJoker([])
          }}
        >
          desmarcar
        </span>
        <span
          role="button"
          onClick={() => {
            setJoker(map(state, '_id'))
          }}
        >
          marcar
        </span>

        <span
          role="button"
          onClick={() => {
            retry()
          }}
        >
          recarregar
        </span>
      </div>
      <br />

      {state.map((o, i) => (
        <div key={i} className="d-flex gap-2">
          <input
            type="checkbox"
            checked={joker.includes(o._id)}
            onChange={() => toggle(o._id)}
          />
          <Link to={'/venda/' + o._id}>ver</Link>
          <span>{truncate(o._id, { length: 10 })}</span>
          <span>{o.obs}</span>
        </div>
      ))}
    </div>
  )
}
