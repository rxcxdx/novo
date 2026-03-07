import { useState, useTransition } from 'react'
import { List } from 'react-window'
import { fetcherIndice } from './api'
import { Link } from 'react-router'
import { ISO_DATE } from './utils'

const ESTILO_PENDING = 'text-blue-700 disabled:text-gray-300 border'

const estadoInicial = { gte: ISO_DATE, lte: ISO_DATE }

export function LinkVenda({ value }) {
  return (
    <Link className="font-mono text-blue-600" to={'/venda/' + value}>
      {value.slice(0, 10)}...
    </Link>
  )
}

function RowComponent({ index, docs, style }) {
  const o = docs[index]
  return (
    <div style={style}>
      <LinkVenda value={o._id} />
      &nbsp;
      <span className="text-xs">{o.dt_fmt}</span>
    </div>
  )
}

export function Indice() {
  const [isPending, startTransition] = useTransition()
  const [docs, setDocs] = useState()
  const [formulario, setFormulario] = useState(estadoInicial)
  const action = async () => {
    const rs = await fetcherIndice(formulario)
    setDocs(rs)
  }
  return (
    <div>
      <div className="text-xs">gte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={formulario.gte}
          onChange={(evt) =>
            setFormulario({ ...formulario, gte: evt.target.value })
          }
        />
      </div>
      <div className="text-xs">lte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={formulario.lte}
          onChange={(evt) =>
            setFormulario({ ...formulario, lte: evt.target.value })
          }
        />
      </div>
      <div className="mt-2">
        <button
          className={ESTILO_PENDING}
          disabled={isPending}
          onClick={() => startTransition(action)}
        >
          pesquisar
        </button>
      </div>
      {Array.isArray(docs) && (
        <div>
          <div>{docs.length} linhas</div>
          <div className="w-xs h-48 border-2">
            <List
              rowComponent={RowComponent}
              rowCount={docs.length}
              rowHeight={30}
              rowProps={{ docs }}
              overscanCount={1}
            />
          </div>
        </div>
      )}
    </div>
  )
}
