import { LojaContainer } from './loja'
import Cart from './Cart'
import Comprar from './Comprar'

export default function Pedido() {
  return (
    <div>
      <LojaContainer />
      <br />
      <Comprar />
      <br />
      <Cart />
    </div>
  )
}
