
import { useForm } from 'react-hook-form'
import axios from 'axios'
import delay from 'delay'
import toast from 'react-hot-toast'
import BoxError from './BoxError'
import { useState } from 'react'
import { useMount } from 'react-use'
import { useErrorBoundary } from 'react-error-boundary'

export default function Produto({ produtoId }) {
  const { showBoundary } = useErrorBoundary()
  const [produto, setProduto] = useState({})
  const [loading, setLoading] = useState(false)

  const {
    formState: { isSubmitting, isSubmitSuccessful },
    register,
    handleSubmit
  } = useForm({
    values: produto
  })

  const fetchProduto = async () => {
    try {
      setLoading(true)
      await delay(600)
      const response = await axios('/ws/produto/' + produtoId)
      setProduto(response.data)
    } catch (err) {
      showBoundary(err)
    } finally {
      setLoading(false)
    }
  }

  useMount(() => {
    if (produtoId) fetchProduto()
  })

  const upsert = async (o) => {
    try {
      await delay(500)
      await axios.post('/ws/upsert_produto', o)
    } catch (err) {
      toast.error(<BoxError payload={err} />)
      throw err
    }
  }

  
  if (isSubmitSuccessful) return <div>sucesso upsert produto</div>

  if (loading) return <div>carregando produto...</div>
  return (
    <div>

<div className='border border-dark p-2'>
      <form onSubmit={handleSubmit(upsert)}>
        <div className="row g-2">


        <div className="col-12">
            <div>id</div>
            <input
             type="text"
              {...register('id')} 
              className="border border-danger"
              readOnly  
              />
          </div>

          <div className="col-12">
            <div>descricao</div>
            <input type="text" {...register('descricao')} />
          </div>

          <div className="col-12">
            <div>valor (separador é virgula)</div>
            <input
              type="number"
              step={0.01}
              {...register('valor', {
                valueAsNumber: true
              })}
            />
          </div>

          <div className="col-12">
            <button
              className="btn btn-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Gravar
            </button>
          </div>

        </div>
      </form>
      </div>
    </div>
  )
}
