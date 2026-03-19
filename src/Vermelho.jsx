import { useState } from 'react'

export default function Vermelho() {
  const [state, setState] = useState(false)
  if (state) throw new Error('meu erro vermelho')
  return (
    <button
      className="bg-red-300"
      onClick={() => setState(!state)}
    >
      vermelho
    </button>
  )
}
