import { getErrorMessage } from 'react-error-boundary'

export default function FallbackApplication({ error, resetErrorBoundary }) {
  return (
    <div className="text-red-600 w-xs border p-1 font-mono">
      <div>FallbackApplication</div>
      <div>{error.name}</div>
      <div>{getErrorMessage(error)}</div>
      <div>
        <button className="font-bold" onClick={resetErrorBoundary}>
          retry
        </button>
      </div>
    </div>
  )
}
