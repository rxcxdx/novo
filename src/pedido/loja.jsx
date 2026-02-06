import { useDispatch } from 'react-redux'
import { Suspense, use, useState } from 'react'
import Select from 'react-select'
import { sample } from 'lodash-es'
import { FaShuffle } from 'react-icons/fa6'
import { fetcherLoja } from '../api'

function filtro(o, v) {
  return o.label.includes(v)
}

function Loja({ promise,refetch }) {
  const docs = use(promise)
  const dispatch = useDispatch()
  const [state, setState] = useState(null)
  const unshift = (o) => {
    dispatch({ type: 'UNSHIFT', payload: o })
  }
  return (
    <div>
      <div>
        <Select
          className="w-xs"
          placeholder="selecione"
          options={docs}
          getOptionLabel={(o) => o.descricao}
          getOptionValue={(o) => o.id}
          isClearable
          value={state}
          onChange={setState}
          filterOption={filtro}
        />
      </div>

      <div className="flex gap-x-3">
        <button onClick={() => unshift(state)}>adicionar</button>
        <FaShuffle size="2em" onClick={() => unshift(sample(docs))} />
        <button onClick={() => refetch()}>refetch</button>
      </div>

    </div>
  )
}

export function LojaContainer() {
  const promise = fetcherLoja()
  const [key, setKey] = useState()
  return (
    <div>
      <Suspense fallback={<div>carregando loja...</div>}>
        <Loja promise={promise} key={key} refetch={() => setKey(Date.now())} />
      </Suspense>
    </div>
  )
}
