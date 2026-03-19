import { useState } from 'react'
import { toast } from 'sonner'
import { mutateEditarDt } from './api'
import { BoxError } from './fallbacks'
import dayjs from './dayjs'

export default function EditarDt({ _id, dt }) {
  const [state, setState] = useState(dt)
  const j = dayjs(state).format('DD/MM/YYYY HH:mm:ss.SSS')
  const tarefa = async () => {
    try {
      await mutateEditarDt({ _id, dt: state })
      toast.success('sucesso')
    } catch (error) {
      toast.error(<BoxError error={error} />, {
        icon: null
      })
    }
  }
  return (
    <div className="w-xs border border-dashed p-2">
      <div className='text-xs'>{j}</div>
      <div className="mb-1">
        <input
          className="border w-full"
          type="text"
          value={state}
          onChange={(evt) => setState(evt.target.value)}
        />
      </div>
      <button className="border" onClick={tarefa}>
        gravar
      </button>
    </div>
  )
}
