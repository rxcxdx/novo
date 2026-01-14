import { Suspense, use, useState } from 'react'
import { mutateApagarVendas, fetcherTimeline } from './api'
import { toast } from 'sonner'
import { LinkVenda } from './indice'
import { useSet } from 'react-use'

export function Apagar({ value }) {
  const tarefa = () => {
    toast.promise(mutateApagarVendas(value), {
      loading: 'Apagando...',
      success: 'Sucesso apagar',
      error: (e) => e.message
    })
  }
  return (
    <button className="text-red-600" onClick={tarefa}>
      apagar
    </button>
  )
}

function Timeline({ promise }) {
  const docs = use(promise)
  const [joker, { add, has, clear, toggle }] = useSet(new Set())
  const marcar = () => {
    clear()
    docs.forEach((o) => {
      add(o._id)
    })
  }
  const desmarcar = () => {
    clear()
  }
  const lista = docs.map((o) => (
    <div key={o._id} className="flex gap-x-3 ">
      <input
        type="checkbox"
        checked={has(o._id)}
        onChange={() => toggle(o._id)}
      />
      <LinkVenda value={o._id} />
      <span>{o.dia}</span>
      <span>{o.obs}</span>
    </div>
  ))
  return (
    <div className="bg-yellow-100">
      <div className="flex gap-x-3 ">
        <Apagar value={Array.from(joker)} />

        <button onClick={marcar}>marcar</button>
        <button onClick={desmarcar}>desmarcar</button>
      </div>
      <div>seleção: {joker.size}</div>
      {lista}
    </div>
  )
}

export function TimelineContainer() {
  const promise = fetcherTimeline()
  const [key, setKey] = useState()
  return (
    <div>
      <div className='mb-2'>
        <button className='border p-1' onClick={() => setKey(Date.now())}>refetch</button>
      </div>
      <Suspense fallback={<div>carregando...</div>}>
        <Timeline key={key} promise={promise} />
      </Suspense>
    </div>
  )
}
