import { Suspense, use } from 'react'
import { ClipLoader } from 'react-spinners'
import SuperVenda from './SuperVenda'
import axios from 'axios'
import delay from 'delay'

async function fetchVenda(v) {
  await delay(100)
  const response = await axios('/ws/venda/' + v)
  return response.data
}

function Conteudo({ vendaPromise }) {
  const venda = use(vendaPromise)
  return <SuperVenda venda={venda} />
}

export default function Venda({ vendaId }) {
  const vendaPromise = fetchVenda(vendaId)
  return (
    <div>
      <Suspense fallback={<ClipLoader />}>
        <Conteudo vendaPromise={vendaPromise} />
      </Suspense>
    </div>
  )
}
