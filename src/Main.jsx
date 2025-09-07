import Roteador from './Roteador'
import { Toaster } from 'sonner'

export default function Main() {
  return (
    <div>
      <Roteador />
      <Toaster
        position="top-left"
        richColors
        toastOptions={{ duration: 800 }}
      />
    </div>
  )
}
