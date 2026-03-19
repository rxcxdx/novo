import { memo } from 'react'
import Quantidade from './Quantidade'
import BtnRemover from './BtnRemover'
import { useRendersCount } from "react-use";

function CartItem({ item }) {
  const rendersCount = useRendersCount();
  return (
    <div className="mb-4 hover:bg-sky-200">
        <div>Renders count: {rendersCount}</div>
      <div>{item.descricao}</div>
      <div>valor: {item.valor}</div>
      <Quantidade item={item} />
      <div className="mt-1">
        <BtnRemover identifier={item.identifier} />
      </div>
    </div>
  )
}

export default memo(CartItem)
