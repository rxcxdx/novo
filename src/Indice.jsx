import { useState } from 'react'
import { fetcherIndice } from './api'
import Rolagem from './Rolagem'
import { FormularioDia } from './formularios'

export default function Indice() {
  const [state, setState] = useState({})
  return (
    <div>
      <FormularioDia onSuccess={setState} fetcher={fetcherIndice} />
      <div>inicio: {state.inicio}</div>
      <div>fim: {state.fim}</div>
      <div>linhas: {state.linhas}</div>
      <Rolagem docs={state.docs} />
    </div>
  )
}
