export function FallbackMini({ error }) {
  return (
    <div className="text-red-500">
      <div>name:</div>
      <div>{error.name}</div>
      <div>message:</div>
      <div>{error.message}</div>
    </div>
  )
}

export function Fallback({ error, resetErrorBoundary }) {
  const tarefa = () => {
    resetErrorBoundary()
  }
  return (
    <div>
      <FallbackMini error={error} />
      <div>
        <button onClick={tarefa} className="border-2 p-1">
          RESET
        </button>
      </div>
    </div>
  )
}
