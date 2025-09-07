import { Copy } from 'grommet-icons'
import { toast } from 'sonner'

export default function Copiar({ value }) {
  return (
    <Copy
      color="green"
      size="small"
      onClick={() => {
        {
          window.navigator.clipboard.writeText(value)
          toast.success('copiado', { description: value })
        }
      }}
    />
  )
}
