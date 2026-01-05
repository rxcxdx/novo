export function Fallback({ error, resetErrorBoundary }) {
  const tarefa = () => {
    resetErrorBoundary()
  }
  return (
    <div className="w-xs bg-red-400 p-1">
      <div>name:</div>
      <div>{error.name}</div>

      <div>message:</div>

      <div>{error.message}</div>

      <div>
        <button onClick={tarefa} className="border">
          RESET
        </button>
      </div>
    </div>
  )
}
