import { useErrorBoundary } from 'react-error-boundary'
import MinhaStore from './MinhaStore'
import { Provider } from 'react-redux'
import store from './store'

export default function Geral() {
  const { showBoundary } = useErrorBoundary()

  return (
    <div>
      <Provider store={store}>
        <div style={{ backgroundColor: 'cyan'}}>
          <div className="hstack gap-1">
            <b
              type="button"
              onClick={() => showBoundary(new Error('meu errinho'))}
            >
              gerar erro
            </b>
          </div>
          <MinhaStore />
        </div>
      </Provider>
    </div>
  )
}
