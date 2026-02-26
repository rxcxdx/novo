import { memo } from 'react'
import Quantidade from './Quantidade'
import BtnRemover from './BtnRemover'
import Valor from './Valor'

function CartItem({ identifier, descricao, quantidade, valor }) {
  

  return (
    <div className="mb-4 hover:bg-sky-200">
      <div>identifier: {identifier}</div>
      <div>descricao: {descricao}</div>
      <Quantidade identifier={identifier} quantidade={quantidade} />
      <Valor identifier={identifier} valor={valor} />
      <div className='mt-1'>
        <BtnRemover identifier={identifier} />
      </div>
    </div>
  )
}

export default memo(CartItem)
