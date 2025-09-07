import { useParams } from 'react-router'
import { Suspense, use, useState } from 'react'
import { fetcherProduto } from './api'
import { Field, Form, Formik } from 'formik'
import delay from 'delay'
import axios from 'axios'
import { toast } from 'sonner'
import { ProtecaoBasic } from './fallbacks'

export function Produto({ estadoInicial }) {
  const [successfully, setSuccessfully] = useState(false)
  if (successfully) return <h2>Sucesso</h2>
  return (
    <div>
      <div style={{ color: 'gray' }}>id: {estadoInicial.id}</div>
      <div>
        <Formik
          initialValues={estadoInicial}
          onSubmit={async (o) => {
            try {
              await delay(800)
              await axios.put('/ws/produtos', o)
              setSuccessfully(true)
            } catch (e) {
              toast.error(<ProtecaoBasic error={e} />)
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>descricao</div>
              <div>
                <Field type="text" name="descricao" />
              </div>
              <div>valor</div>
              <div>
                <Field type="number" name="valor" step={0.01} />
              </div>
              <br />
              <div>
                <button disabled={isSubmitting} type="submit">
                  Gravar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

function Nuvem({ produtoPromise }) {
  const produto = use(produtoPromise)
  return <Produto estadoInicial={produto} />
}

export function AtualizarProduto() {
  const params = useParams()
  const produtoPromise = fetcherProduto(params.produtoId)
  return (
    <Suspense fallback={<div>carregando...</div>}>
      <Nuvem produtoPromise={produtoPromise} />
    </Suspense>
  )
}
