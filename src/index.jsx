import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Main from './Main'
import './ctrl'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="container">
    <ErrorBoundary fallback={<div>Erro fatal no programa.</div>}>
      <Main />
    </ErrorBoundary>
  </div>
)
