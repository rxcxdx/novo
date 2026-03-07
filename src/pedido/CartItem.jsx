import { memo } from 'react'
import Quantidade from './Quantidade'
import BtnRemover from './BtnRemover'

function CartItem({ identifier, descricao, quantidade, valor }) {
  return (
    <div className="mb-4 hover:bg-sky-200">
      <div>identifier: {identifier}</div>
      <div>descricao: {descricao}</div>
      <div>valor: {valor}</div>
      <Quantidade identifier={identifier} quantidade={quantidade} />
      <div className="mt-1">
        <BtnRemover identifier={identifier} />
      </div>
    </div>
  )
}

export default memo(CartItem)
