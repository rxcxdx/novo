export function Fallback({ error, resetErrorBoundary }) {
  const tarefa = () => {
    resetErrorBoundary()
  }
  return (
    <div className="border border-danger p-2 my-2">
      <div>name:</div>
      <div>{error.name}</div>

      <div>message:</div>

      <div>{error.message}</div>

      <div>
        <span role="button" className='text-primary' onClick={tarefa}>
          RESET
        </span>
      </div>
    </div>
  )
}
