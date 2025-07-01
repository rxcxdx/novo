import axios from 'axios'
import toast from 'react-hot-toast'
import BoxError from './BoxError'
import { useForm } from 'react-hook-form'
import delay from 'delay'

export default function CriarDespesa() {

  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting}
  } = useForm()


  const gravar = async (o) => {
    try {
      await delay(600)
      await axios.post('/ws/criar_despesa', o)
      toast.success('sucesso')
      reset()
    } catch (err) {
      toast.error(<BoxError payload={err} />)
      throw err
    }
  }

  return (
    <div>
      
      <div className='border border-dark p-2'>
      <form onSubmit={handleSubmit(gravar)}>
        <div className="row g-3">
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
            <div>dt</div>

            <input type="date" {...register('dt')} />

          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Gravar</button>
          </div>
        </div>
      </form>
      </div>



    </div>
  )
}