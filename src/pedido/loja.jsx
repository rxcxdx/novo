import { useDispatch } from 'react-redux'
import { Suspense, use, useState } from 'react'
import Select from 'react-select'
import { fetcherLoja } from '../api'

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
  const shuffle = () => {
    dispatch({ type: 'UNSHIFT', payload: docs[0] })
  }
  return (
    <div>
      <div>
        <Select
          className="w-full"
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


      <div className="flex gap-x-3 mt-3">
        <button className="border" onClick={() => unshift()}>
          unshift
        </button>
        <button className="border" onClick={() => shuffle()}>
          shuffle
        </button>
      </div>

      
    </div>
  )
}

export function LojaContainer() {
  const promise = fetcherLoja()
  return (
    <div className='border w-xs p-2'>
      <Suspense fallback={<div>carregando loja...</div>}>
        <Loja promise={promise} />
      </Suspense>
    </div>
  )
}
