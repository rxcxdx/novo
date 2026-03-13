import axios from 'axios'
import { get } from 'lodash-es'

export function BoxError({ error }) {
  return (
    <div>
      <div>{get(error, 'name')}</div>
      <div>{get(error, 'message')}</div>
      {axios.isAxiosError(error) && (
        <div>
          <div>linha1: {get(error, 'response.data.tipo')}</div>
          <div>linha2: {get(error, 'response.data.motivo')}</div>
          <div>linha3: {get(error, 'response.status')}</div>
        </div>
      )}
    </div>
  )
}

export function FallbackApplication({ error, resetErrorBoundary }) {
  return (
    <div className="w-xs bg-red-300 p-2">
      <div className="font-bold">FallbackApplication</div>
      <BoxError error={error} />
      <button className="border" onClick={resetErrorBoundary}>
        Retry
      </button>
    </div>
  )
}
