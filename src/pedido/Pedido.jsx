import { LojaContainer } from './loja'
import Cart from './Cart'
import { Provider } from 'react-redux'
import { store } from './store'

export default function Pedido() {
  return (
    <div>
      <Provider store={store}>
        <LojaContainer />
        <Cart />
      </Provider>
    </div>
  )
}
