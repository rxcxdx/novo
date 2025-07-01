import { Toaster } from 'react-hot-toast'
import Geral from './Geral'
import Roteador from './Roteador'

const TOAST_OPTIONS = {
  success: {
    duration: 700,
    position: 'top-left'
  },
  error: {
    duration: 1500,
    style: {
      color: 'red',
      background: '#171616'
    }
  }
}

export default function Main() {
  return (
    <div>
      <Geral />
      <br />
      <Roteador />
      <div style={{ marginTop: '100px' }}>rodapé</div>
      <Toaster toastOptions={TOAST_OPTIONS} />
    </div>
  )
}
