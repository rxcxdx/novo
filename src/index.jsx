import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { store } from './redux'
import FallbackApplication from './FallbackApplication'
import Application from './Application'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <div className="mx-2 lg:mx-8">
    <div>{process.env.NODE_ENV}</div>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={FallbackApplication}>
        <Application />
      </ErrorBoundary>
    </Provider>
  </div>
)
