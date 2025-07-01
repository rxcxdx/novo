import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useRendersCount } from 'react-use'
import Valor from './Valor'
import Quantidade from './Quantidade'
import Plus from './Plus'

const ESTILO = {
  marginTop: '5px',
  marginBottom: '5px',
  backgroundColor: '#fcb0a9'
}

function CartItem({ bean }) {
  const rendersCount = useRendersCount()
  const dispatch = useDispatch()
  const remover = () => {
    dispatch({ type: 'REMOVER', identifier: bean.identifier })
  }
  return (
    <div style={ESTILO} className="p-1">
      <div>
        <small>count {rendersCount}</small>
      </div>
      <div className="row">
        <div className="col-auto">
          <div>
            <small>descricao</small>
          </div>
          <div>{bean.descricao}</div>
        </div>
        <div className="col-auto">
          <div>
            <small>valor</small>
          </div>
          <Valor bean={bean} />
        </div>
        <div className="col-auto">
          <div>
            <small>quantidade</small>
          </div>
          <Quantidade bean={bean} />
        </div>
      </div>
      <div>
        <button onClick={remover}>remover</button>
      </div>
      <div>
        <small>{bean.identifier}</small>
      </div>
      <Plus bean={bean} />
    </div>
  )
}

export default memo(CartItem)
