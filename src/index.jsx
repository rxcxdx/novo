import ReactDOM from 'react-dom/client'
import { Toaster } from 'sonner'
import { ErrorBoundary } from 'react-error-boundary'
import { Application } from './application'
import { FallbackApplication } from './fallbacks'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="mx-2 lg:mx-8">
    <div>{process.env.NODE_ENV}</div>
    <ErrorBoundary FallbackComponent={FallbackApplication}>
      <Application />
    </ErrorBoundary>
    <Toaster position="top-left" richColors toastOptions={{ duration: 900 }} />
  </div>
)
