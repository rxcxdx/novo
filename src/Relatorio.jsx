import { useState } from 'react'
import dayjs from 'dayjs'
import delay from 'delay'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import { useErrorBoundary } from 'react-error-boundary'

const estadoInicial = {
  gte: dayjs().format('YYYY-MM-DD'),
  lte: dayjs().format('YYYY-MM-DD')
}

export default function Relatorio() {
  const { showBoundary } = useErrorBoundary()
  const [state, setState] = useState({})
  return (
    <div>
      <Formik
        initialValues={estadoInicial}
        onSubmit={async (o) => {
          try {
            await delay(500)
            const { data } = await axios.post('/ws/relatorio', o)
            setState(data)
          } catch (e) {
            showBoundary(e)
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '.5rem' }}>
              <Field type="date" name="gte" />
              &nbsp;
              <Field type="date" name="lte" />
            </div>
            <div><button type="submit" disabled={isSubmitting}>pesquisar</button></div>
          </Form>
        )}
      </Formik>

      <div>
        <div>vendas: {state.vendas}</div>
        <div>itens: {state.itens}</div>
        <div>total: {state.total}</div>
      </div>
    </div>
  )
}
