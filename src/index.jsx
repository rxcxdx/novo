import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './fallbacks'
import Roteador from './Roteador'
import { Toaster } from 'sonner'
import './index.css'
import 'rc-input-number/assets/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div>
    <ErrorBoundary FallbackComponent={Fallback}>
      <Roteador />
    </ErrorBoundary>
    <Toaster richColors position="top-center" />
  </div>
)
