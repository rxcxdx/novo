import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import Application from './Application'
import { store } from './redux'
import Fallback from './Fallback'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="mb-8 mx-2 lg:mx-8">
    <div>{process.env.NODE_ENV}</div>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Application />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </div>
)
