import { useState, useTransition } from 'react'
import { List } from 'react-window'
import { fetcherIndice } from './api'
import { Link } from 'react-router'
import { ISO_DATE } from './utils'

const ESTILO_PENDING = 'text-blue-700 disabled:text-gray-300 border'

export function LinkVenda({ value }) {
  return (
    <Link className="font-mono underline text-blue-600" to={'/venda/' + value}>
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
  const [a, setA] = useState(ISO_DATE)
  const [b, setB] = useState(ISO_DATE)
  const action = async () => {
    const rs = await fetcherIndice(a, b)
    setDocs(rs)
  }
  return (
    <div>
      <div className="text-xs">gte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={a}
          onChange={(evt) => setA(evt.target.value)}
        />
      </div>
      <div className="text-xs">lte</div>
      <div>
        <input
          className="border w-48"
          type="date"
          value={b}
          onChange={(evt) => setB(evt.target.value)}
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
