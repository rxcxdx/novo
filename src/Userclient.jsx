import toast from 'react-hot-toast'
import BoxError from './BoxError'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import delay from 'delay'
import { ScaleLoader } from 'react-spinners'
import { useErrorBoundary } from 'react-error-boundary'

export default function Userclient({ userclientId }) {
  const { showBoundary } = useErrorBoundary()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isLoading, isSubmitSuccessful }
  } = useForm({
    defaultValues: async () => {
      try {
        await delay(300)
        const response = await axios('/ws/userclient/' + userclientId)
        return response.data
      } catch (err) {
        showBoundary(err)
      }
    }
  })

  const gravar = async (o) => {
    try {
      
      await delay(500)
      await axios.post('/ws/atualizar_userclient', o)
    } catch (err) {
      toast.error(<BoxError payload={err} />)
      throw err
    }
  }

  if (isSubmitSuccessful) return <h1>sucesso</h1>
  if (isLoading) return <ScaleLoader />
  return (
    <div>
      <form onSubmit={handleSubmit(gravar)}>
        <div className="row g-3">
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
            <div>username</div>

            <input 
            type="text" 
            {...register('username')}
            className="border border-danger"
            readOnly            
            />

          </div>
          <div className="col-12">
            <div>senha</div>
            <input type="text" {...register('senha')} />
          </div>
          <div className="col-12">
            <input type="checkbox" {...register('liberado')} />
            &nbsp;
            <span>liberado</span>
          </div>
          <div className="col-12">
            <div>access_token</div>

            <input
              className="border border-danger"
              readOnly
              style={{ width: '100%' }}
              type="text"
              {...register('access_token')}
            />

          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Atualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
