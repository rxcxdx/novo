import { Outlet } from 'react-router'
import { Toaster } from 'sonner'
import Navbar from './Navbar'

export default function Root() {
  return (
    <div>
      <Toaster position="top-left" richColors toastOptions={{ duration: 900 }} />
      <Navbar />
      <div className="mx-2 lg:mx-8">
        <Outlet />
      </div>
    </div>
  )
}
