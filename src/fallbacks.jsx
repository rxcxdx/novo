export function BoxError({ error }) {
  return (
    <div className="w-xs border border-2 border-red-500">
      <div>name: {error.name}</div>
      <div>message: {error.message}</div>
    </div>
  )
}
