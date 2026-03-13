import { useState, useTransition } from 'react'
import { List } from 'react-window'
import { fetcherIndice } from './api'
import { Link } from 'react-router'
import { ESTILO_PENDING } from './estilos'
import { truncate } from 'lodash-es'
import { DIA_ATUAL } from './utils'

export function LinkVenda({ value }) {
  return (
    <Link className="font-mono text-blue-600" to={'/venda/' + value}>
      {truncate(value, { length: 8 })}
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

function IndiceResposta({ docs }) {
  if (!Array.isArray(docs)) return null
  return (
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
  )
}

export function Indice() {
  const [isPending, startTransition] = useTransition()
  const [docs, setDocs] = useState()
  const [field1, setField1] = useState(DIA_ATUAL)
  const [field2, setField2] = useState(DIA_ATUAL)
  const action = async () => {
    const rs = await fetcherIndice(field1, field2)
    setDocs(rs)
  }
  return (
    <div>
      <div className="text-xs">gte</div>
      <div>
        <input
          className="border w-48"
          type="text"
          value={field1}
          onChange={(evt) => setField1(evt.target.value)}
        />
      </div>
      <div className="text-xs">lte</div>
      <div>
        <input
          className="border w-48"
          type="text"
          value={field2}
          onChange={(evt) => setField2(evt.target.value)}
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
      <IndiceResposta docs={docs} />
    </div>
  )
}
