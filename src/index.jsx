import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import Protecao from './Protecao'
import Main from './Main'
import './ctrl'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="container">
    <ErrorBoundary FallbackComponent={Protecao}>
      <Main />
    </ErrorBoundary>
  </div>
)
