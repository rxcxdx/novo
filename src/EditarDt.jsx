import { mutateEditarDt } from './api'
import { toast } from 'sonner'
import { BoxError } from './fallbacks'
import { useState } from 'react'
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
    <div className="w-xs border border-dashed p-1">
      <div>{j}</div>
      <div className="mb-1">
        <input
          className="border w-full"
          type="text"
          value={state}
          onChange={(evt) => setState(evt.target.value)}
        />
      </div>
      <button className="bg-green-300" onClick={tarefa}>
        gravar
      </button>
    </div>
  )
}
