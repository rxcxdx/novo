import { useState } from 'react'
import InputNumber from '@rc-component/input-number'
import { toast } from 'sonner'
import { fetcherLucro } from '../api'
import { BoxError } from '../fallbacks'

export default function MargemLucro({ alpha }) {
  const [beta, setBeta] = useState(0)
  const tarefa = async () => {
    try {
      const v = await fetcherLucro({ alpha, beta })
      toast.success(v, { description: 'Margem de lucro %'})
    } catch (error) {
      toast.error(<BoxError error={error} />, {
        icon: null
      })
    }
  }
  return (
    <div>
      <div>Margem de lucro</div>
      <div className="w-32 mb-2">
        <InputNumber
          inputMode="decimal"
          precision={2}
          decimalSeparator=","
          value={beta}
          onChange={setBeta}
          controls={false}
        />
      </div>
      <div>
        <button className="border" onClick={tarefa}>
          calcular
        </button>
      </div>
    </div>
  )
}
