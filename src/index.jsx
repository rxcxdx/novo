import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './fallbacks'
import Roteador from './Roteador'
import { Toaster } from 'sonner'
import './estilo.scss'
import 'react-loading-skeleton/dist/skeleton.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="container">
    <ErrorBoundary FallbackComponent={Fallback}>
      <Roteador />
    </ErrorBoundary>

    <Toaster richColors position="top-center" />
  </div>
)
