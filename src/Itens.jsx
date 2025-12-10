import { useState } from 'react'
import { fetcherItens } from './api'
import { FormularioDia } from './formularios'
import { isEmpty } from 'lodash-es'

function Tabela({ docs }) {
  if (isEmpty(docs)) return
  const linhas = docs.map((o, i) => (
    <tr key={i}>
      <td>{o.descricao}</td>
      <td>{o.quantidade}</td>
    </tr>
  ))
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>descricao</th>
          <th>quantidade</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  )
}

export default function Itens() {
  const [state, setState] = useState({})
  return (
    <div>
      <FormularioDia onSuccess={setState} fetcher={fetcherItens} />
      <div>inicio: {state.inicio}</div>
      <div>fim: {state.fim}</div>
      <div>linhas: {state.linhas}</div>
      <Tabela docs={state.docs} />
    </div>
  )
}
