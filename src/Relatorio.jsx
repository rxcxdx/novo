import { useState } from 'react'
import { FormularioRange } from './formularios'
import { fetcherRelatorio } from './api'
import JsonView from '@uiw/react-json-view'

export default function Relatorio() {
  const [doc, setDoc] = useState({})
  return (
    <div>
      <FormularioRange fetcher={fetcherRelatorio} onSuccess={setDoc} />

      <JsonView
        value={doc}
        enableClipboard={false}
        displayObjectSize={false}
        displayDataTypes={false}
      />
    </div>
  )
}
