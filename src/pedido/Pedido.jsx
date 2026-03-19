import { Provider } from 'react-redux'
import { LojaContainer } from './loja'
import Cart from './Cart'
import BtnComprar from './BtnComprar'
import { store } from '../redux'
import Obs from './Obs'
import BtnClear from './BtnClear'

export default function Pedido() {
  return (
    <Provider store={store}>
      <div className="mb-1">
        <BtnClear />
      </div>
      <div className="mb-1">
        <Obs />
      </div>
      <div className="mb-1">
        <BtnComprar />
      </div>
      <LojaContainer />
      <Cart />
    </Provider>
  )
}
