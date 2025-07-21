import { ErrorBoundary } from 'react-error-boundary'
import Loja from './Loja'
import Cart from './Cart'
import Comprar from './Comprar'
import { Provider } from 'react-redux'
import store from './store'
import { get } from 'lodash-es'

function ComprarProtecao({ error, resetErrorBoundary }) {
  return (
    <div className="alert alert-danger">
      <div><button onClick={() => resetErrorBoundary()}>fechar</button></div>      
      <div>{error.message}</div>
      <div>{get(error, 'response.data')}</div>
    </div>
  )
}

export default function Pedido() {
  return (
    <div>
      <Provider store={store}>
        <Loja />
        <br />
        <ErrorBoundary FallbackComponent={ComprarProtecao}>
          <Comprar />
        </ErrorBoundary>
        <Cart />
      </Provider>
    </div>
  )
}
