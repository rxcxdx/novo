import { useErrorBoundary } from 'react-error-boundary'
import { useSWRConfig } from 'swr'

export default function Geral() {
  
  const { cache } = useSWRConfig()
  const { showBoundary } = useErrorBoundary()

  return (
    <div className="bg-info p-1">

      <div className="hstack gap-1">
        <button onClick={() => console.log(cache)}>
          cache
        </button>
        <button onClick={() => showBoundary(new Error('meu errinho'))}>
          gerar erro
        </button>
      </div>

    </div>
  )
}
