import { getErrorMessage } from 'react-error-boundary'

export default function Fallback({ error }) {
  return (
    <div className="w-xs bg-red-400 p-1">
      <div>Componente Fallback</div>
      <div>{error.name}</div>
      <div>{getErrorMessage(error)}</div>
    </div>
  )
}
