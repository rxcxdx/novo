import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import Application from './Application'
import { store } from './redux'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <ErrorBoundary fallback={<div>Erro fatal no app.</div>}>
    <BrowserRouter>
      <Provider store={store}>
        <Application />
      </Provider>
    </BrowserRouter>
    <Toaster richColors position="top-center" />
  </ErrorBoundary>
)
