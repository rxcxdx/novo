import { Suspense, use, useState } from 'react'
import { mutateApagarVendas, fetcherTimeline } from './api'
import { toast } from 'sonner'
import { LinkVenda } from './rolagem'
import {useSet} from 'react-use';


function Timeline({ promise,refetch }) {
  const docs = use(promise)
  const [joker, { add,has, clear,toggle }] = useSet(new Set())



  const apagar = async () => {
    try {
      await mutateApagarVendas(joker)
      toast.success('sucesso apagar')
      refetch()
    } catch (e) {
      toast.error(e.message)
    }
  }

  const marcar = () => {
    clear()
    docs.forEach((o) => {
      add(o._id)
    });
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
      <span>{o.description}</span>
      <span>{o.obs}</span>
      
    </div>
  ))

  return (
    <div>
      <div className="flex gap-x-3 ">
        <button className="text-red-500" onClick={apagar}>
          apagar
        </button>
        <button onClick={marcar}>marcar</button>
        <button onClick={desmarcar}>desmarcar</button>
        <button onClick={refetch}>refetch</button>
      </div>
      <div>seleção: {joker.size}</div>
      {lista}
    </div>
  )
}

export function TimelineContainer() {
  const promise = fetcherTimeline()
  const [state, setState] = useState(Date.now())
  return (
    <div className='bg-yellow-100'>
      <Suspense fallback={<div>carregando...</div>}>
      <Timeline
          key={state}
          promise={promise}
          refetch={() => setState(Date.now())}
        />
      </Suspense>
    </div>
  )
}
