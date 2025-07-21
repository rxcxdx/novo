import { memo } from 'react'
import { useRendersCount } from 'react-use'
import Quantidade from './Quantidade'
import Remover from './Remover'

const ESTILO = {
  marginTop: '5px',
  marginBottom: '5px',
  backgroundColor: '#fcb0a9'
}

function CartItem({ bean }) {
  const rendersCount = useRendersCount()
  return (
    <div style={ESTILO} className="p-1">  
      <div>descricao: {bean.descricao}</div>
      <div>valor: {bean.valor}</div>
      
      <Quantidade bean={bean} />
      <div>
        <Remover identifier={bean.identifier} />
      </div>
      <div>
        <small>{bean.identifier}</small>
      </div>
      <div>
        <small>count: {rendersCount}</small>
      </div>
    </div>
  )
}

export default memo(CartItem)
