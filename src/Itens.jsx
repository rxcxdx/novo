import { useState } from 'react'
import { fetcherItens } from './api'
import { FormularioDia } from './formularios'

import JsonView from '@uiw/react-json-view'

export default function Itens() {
  const [state, setState] = useState([])
  return (
    <div>
      <FormularioDia onSuccess={setState} fetcher={fetcherItens} />
      <JsonView
        value={state}
        enableClipboard={false}
        displayDataTypes={false}
      />
    </div>
  )
}
