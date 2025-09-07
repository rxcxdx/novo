import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Main from './Main'
import { Protecao } from './fallbacks'
import 'normalize.css'
import './estilo.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <ErrorBoundary FallbackComponent={Protecao}>
      <Main />
    </ErrorBoundary>
  </div>
)
