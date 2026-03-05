import { getErrorMessage } from 'react-error-boundary'

export default function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className="w-xs border border-dashed p-2 font-mono">
      <div>Componente Fallback</div>
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
