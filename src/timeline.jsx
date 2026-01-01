import { map } from 'lodash-es'
import { Suspense, use, useState } from 'react'
import { fetcherTimeline } from './api'
import { nanoid } from 'nanoid'
import { mutateApagarVendas } from './api'
import { toast } from 'sonner'
import { LinkVenda } from './rolagem'
import { enableMapSet, produce } from 'immer'

enableMapSet()

function Timeline({ promise, refetch }) {
  const docs = use(promise)
  const [joker, setJoker] = useState(new Set())

  const toggle = (_id) => {
    if (joker.has(_id)) {
      setJoker(
        produce((draft) => {
          draft.delete(_id)
        })
      )
    } else {
      setJoker(
        produce((draft) => {
          draft.add(_id)
        })
      )
    }
  }

  const apagar = async () => {
    try {
      await mutateApagarVendas(Array.from(joker))
      toast.success('sucesso apagar')
      refetch()
    } catch (e) {
      toast.error(e.message)
    }
  }
  const lista = docs.map((o) => (
    <div key={o._id} className="flex gap-x-3 ">
      <input
        type="checkbox"
        checked={joker.has(o._id)}
        onChange={() => toggle(o._id)}
      />
      <LinkVenda value={o._id} />
      <span>{o.obs}</span>
    </div>
  ))
  return (
    <div>
      <div className="flex gap-x-3 ">
        <button
          className="text-red-500"
          onClick={() => {
            apagar()
          }}
        >
          apagar
        </button>
        
        <button onClick={() => setJoker(new Set(map(docs, '_id')))}>marcar</button>
        <button onClick={() => setJoker(new Set())}>desmarcar</button>


        <button
          onClick={() => {
            refetch()
          }}
        >
          refetch
        </button>
      </div>
      <div>seleção: {joker.size}</div>
      {lista}
    </div>
  )
}

export function TimelineContainer() {
  const [state, setState] = useState(nanoid())
  const promise = fetcherTimeline()
  return (
    <div>
      <Suspense fallback={<div>carregando...</div>}>
        <Timeline
          key={state}
          promise={promise}
          refetch={() => setState(nanoid())}
        />
      </Suspense>
    </div>
  )
}
