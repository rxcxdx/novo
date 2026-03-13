import { useState } from 'react'
import InputNumber from '@rc-component/input-number'
import { fetcherLucro } from '../api'
import { toast } from 'sonner'
import { BoxError } from '../fallbacks'

export default function MargemLucro({ alpha }) {
  const [beta, setBeta] = useState(0)

  const tarefa = async () => {
    try {
      const o = await fetcherLucro({ alpha, beta })
      toast.success(o.margemLucroFmt, { description: 'Margem de lucro' })
    } catch (error) {
      toast.error(<BoxError error={error} />, {
        icon: null
      })
    }
  }

  return (
    <div>
      <div>Margem de lucro</div>
      <div className="w-40 mb-2">
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
        <button className="bg-green-300" onClick={tarefa}>
          calcular
        </button>
      </div>
    </div>
  )
}
