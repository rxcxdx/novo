import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Fallback } from './fallbacks'
import Roteador from './Roteador'
import { Toaster } from 'sonner'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className='mt-1 mb-8 mx-1 lg:mx-8'>
    <ErrorBoundary FallbackComponent={Fallback}>
      <Roteador />
    </ErrorBoundary>
    <Toaster richColors position="top-left" />
  </div>
)
