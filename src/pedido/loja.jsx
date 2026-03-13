import { Suspense, use, useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { fetcherLoja } from '../api'
import BtnShuffle from './BtnShuffle'
import { unshiftAction } from '../redux'

function filtro(o, v) {
  return o.label.includes(v)
}

function Loja({ promise }) {
  const dispatch = useDispatch()
  const docs = use(promise)
  const [state, setState] = useState(null)
  const tarefa = () => {
    if (!state) return
    dispatch(unshiftAction(state))
  }
  return (
    <div>
      <div className="mb-1">
        <BtnShuffle docs={docs} />
      </div>
      <div className="mb-1 w-full">
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
        <button className="bg-green-300" onClick={tarefa}>
          unshift
        </button>
      </div>
    </div>
  )
}

export function LojaContainer() {
  const promise = fetcherLoja()
  return (
    <div className="w-xs border border-dashed p-1">
      <Suspense fallback={<div>carregando loja...</div>}>
        <Loja promise={promise} />
      </Suspense>
    </div>
  )
}
