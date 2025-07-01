import BoxError from './BoxError'

export default function Protecao({ error, resetErrorBoundary }) {
  return (
    <div>
      <div style={{ width: 'fit-content' }}>
        <div className="border border-danger my-2 p-2">
          <div className="text-danger">
            <BoxError payload={error} />
          </div>
        </div>
      </div>
      <div>
        <button onClick={() => resetErrorBoundary()}>reset</button>
      </div>
    </div>
  )
}
