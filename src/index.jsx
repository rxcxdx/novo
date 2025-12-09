import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Roteador from './Roteador'
import './index.css'
import 'toastify-js/src/toastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <ErrorBoundary fallback={<div>Erro fatal no programa.</div>}>
      <Roteador />
    </ErrorBoundary>
  </div>
)
