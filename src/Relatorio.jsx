
import { useState } from 'react'
import { fetcherRelatorio } from './api'
import JsonView from '@uiw/react-json-view'
import dayjs from 'dayjs'

const DIA_ATUAL = dayjs().format('YYYY-MM-DD')

export default function Relatorio() {
  const [state, setState] = useState({
    gte: DIA_ATUAL,
    lte: DIA_ATUAL
  })
  const [doc, setDoc] = useState({})

  const action = async () => {
    const rs = await fetcherRelatorio(state)
    setDoc(rs)
  }

  return (
    <div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="date"
          value={state.gte}
          onChange={(evt) => setState({ ...state, gte: evt.target.value })}
        />
      </div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="date"
          value={state.lte}
          onChange={(evt) => setState({ ...state, lte: evt.target.value })}
        />
      </div>

      <div>
        <button onClick={action} className="border">
          pesquisar
        </button>
      </div>

      <br />
      <JsonView
        value={doc}
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  )
}
