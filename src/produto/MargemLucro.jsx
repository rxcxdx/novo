import InputNumber from '@rc-component/input-number'
import { toast } from 'sonner'
import { fetcherLucro } from '../api'
import { useState } from 'react'

export default function MargemLucro({ alpha }) {
  const [beta, setBeta] = useState(null)

  const tarefa = async () => {
    try {
      const o = await fetcherLucro(alpha, beta)
      toast.success(o.margemLucroFmt, {
        icon: null,
        description: 'Margem de lucro'
      })
    } catch (e) {
      toast.error(e.message, { description: e.name, icon: null })
    }
  }

  return (
    <div className="w-xs border border-dashed p-1">
      <div>MargemLucro</div>

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
        <button className="border" onClick={tarefa}>
          calcular
        </button>
      </div>
    </div>
  )
}
