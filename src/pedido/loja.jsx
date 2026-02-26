import { Suspense, use, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { fetcherLoja } from '../api'
import Shuffle from './Shuffle'

function filtro(o, v) {
  return o.label.includes(v)
}

function Loja({ promise }) {
  const dispatch = useDispatch()
  const docs = use(promise)
  const [state, setState] = useState(null)
  const unshift = () => {
    dispatch({ type: 'UNSHIFT', payload: state })
  }
  return (
    <div>
      <Shuffle docs={docs} />
      <div className="mb-1 w-xs">
        <Select
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
      <div>
        <button className="border" onClick={unshift}>
          unshift
        </button>
      </div>
    </div>
  )
}

export function LojaContainer() {
  const promise = fetcherLoja()
  return (
    <div>
      <Suspense fallback={<div>carregando loja...</div>}>
        <Loja promise={promise} />
      </Suspense>
    </div>
  )
}
