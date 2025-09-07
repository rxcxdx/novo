import { Link } from 'react-router'
import ApagarProduto from './ApagarProduto'
import ApagarVenda from './ApagarVenda'
import GoVenda from './GoVenda'
import ApagarItem from './ApagarItem'

export default function BoxHome() {
  return (
    <div>
      <GoVenda />
      <ApagarVenda />
      <ApagarItem />      
      <ApagarProduto />
      <div><Link to="/novo_produto">Novo produto</Link></div>
    </div>
  )
}
