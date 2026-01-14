import { useState } from 'react'
import { fetcherRelatorio } from './api'
import JsonView from '@uiw/react-json-view'
import { ISO_DATE } from './utils'
import { toast } from 'sonner'

const estadoInicial = {
  gte: ISO_DATE,
  lte: ISO_DATE,
  username: ''
}

const ESTILO_LOADING = 'border text-blue-700 disabled:text-red-400'

export default function Relatorio() {
  const [state, setState] = useState({})
  const [formulario, setFormulario] = useState(estadoInicial)
  const [loading, setLoading] = useState(false)
  const tarefa = async () => {
    try {
      setLoading(true)
      const rs = await fetcherRelatorio(formulario)
      setState(rs)
    } catch (e) {
      toast.error(e.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="date"
          value={formulario.gte}
          onChange={(evt) =>
            setFormulario({ ...formulario, gte: evt.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="date"
          value={formulario.lte}
          onChange={(evt) =>
            setFormulario({ ...formulario, lte: evt.target.value })
          }
        />
      </div>
      <div className="mb-2">
        <input
          className="border w-48"
          type="text"
          placeholder='username'
          value={formulario.username}
          onChange={(evt) =>
            setFormulario({ ...formulario, username: evt.target.value })
          }
        />
      </div>
      <div>
        <button onClick={tarefa} className={ESTILO_LOADING} disabled={loading}>
          pesquisar
        </button>
      </div>
      <br />
      <JsonView
        value={state}
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  )
}
