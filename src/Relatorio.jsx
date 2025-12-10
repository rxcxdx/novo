import { useState } from 'react'
import { FormularioRange } from './formularios'
import { fetcherRelatorio } from './api'

export default function Relatorio() {
  const [doc, setDoc] = useState({})
  return (
    <div>
      <FormularioRange fetcher={fetcherRelatorio} onSuccess={setDoc} />
      <div>inicio: {doc.inicio}</div>
      <div>fim: {doc.fim}</div>
      <div>vendas: {doc.vendas}</div>
      <div>total: {doc.total}</div>
    </div>
  )
}
