import { useSelector, Provider } from 'react-redux'
import { ErrorBoundary } from 'react-error-boundary'
import { Login, Logoff } from './login'
import Roteador from './Roteador'
import Pedido from './pedido/Pedido'
import { store } from './redux'
import { Toaster } from 'sonner'
import './index.css'

function Perfil({ userclient }) {
  return (
    <div>

      <div className="bg-yellow-100 border p-1">
        <Logoff />
        <div>{JSON.stringify(userclient)}</div>
      </div>

      <br />
      {userclient.adm ? <Roteador /> : <Pedido />}
    </div>
  )
}

function Main() {
  const userclient = useSelector((store) => store.userclient)
  return userclient ? <Perfil userclient={userclient} /> : <Login />
}

export default function App() {
  return (
    <div>
    
    <div className="mt-1 mb-8 mx-1 lg:mx-8">
      <ErrorBoundary fallback={<div>Erro fatal</div>}>
        <Provider store={store}>
          <Main />
        </Provider>
      </ErrorBoundary>
    </div>

      <Toaster richColors />

    </div>

  )
}
