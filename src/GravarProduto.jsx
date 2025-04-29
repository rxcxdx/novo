import toast from 'react-hot-toast'
import { useNavigate } from "react-router"
import { mutationGravarProduto } from "./api"

export default function GravarProduto({ doc }) {
  const navigate = useNavigate()
  const gravar = async () => {
    try {
      await mutationGravarProduto(doc)
      navigate('/sucesso')
    } catch (err) {
      toast.error(err.name)
     }
  }
  const JOKER = doc.id ? 'Atualizar' : 'Criar'
  return <button className='btn btn-success' onClick={gravar}>{JOKER}</button>
}
