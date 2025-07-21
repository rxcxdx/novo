import { Suspense, use, useState } from 'react'
import { useParams } from 'react-router'
import { fetchProduto, fetchCategorias, gravarProduto } from './api'
import { App, Input, InputNumber, Select } from 'antd'

async function nuvem(produtoId) {
  const foo = await Promise.all([fetchProduto(produtoId), fetchCategorias()])
  return { payload: foo[0], categorias: foo[1] }
}

export function Produto({ payload, categorias }) {
  const [state, setState] = useState(payload)
  const { notification } = App.useApp();
  const tarefa = async () => {
    try {
      await gravarProduto(state)
      notification.success({ message: 'sucesso'})
    } catch(error) {
      notification.error({ message: error.message})
    }

  }

  return (
    <div>

      
      
        <div>id: {state.id}</div>
      
        
          <div>descricao</div>
          <div>
          <Input
          style={{ width: '300px' }}
            value={state.descricao}
            onChange={(e) => setState({ ...state, descricao: e.target.value })}
          />
        </div>


      


      <div>valor</div>
      <div>
        <InputNumber
          value={state.valor}
          style={{ width: '150px' }}
          onChange={(v) => setState({ ...state, valor: v })}
          precision={2}
          decimalSeparator=','
        />
      </div>
      
          <div>categoria</div>

          <div className="hstack gap-1">
          <Select
            placeholder="selecione categoria"
            value={state.categoriaId}
            style={{ width: '200px' }}
            fieldNames={{ label: 'descricao', value: 'id' }}
            options={categorias}
            onChange={(v) => setState({ ...state, categoriaId: v })}
          />
                 <button onClick={() => {
          setState({ ...state, categoriaId: null })
        }}>clear</button>
          </div>

   

      <br />
      <div className="hstack gap-1">
      <button
          className="btn btn-primary"
          onClick={() => {
            tarefa()
          }}
        >
          Gravar
        </button>

 


      </div>
    </div>
  )
}

function Conteudo({ tudoPromise }) {
  const { payload, categorias } = use(tudoPromise)
  return <Produto payload={payload} categorias={categorias} />
}

export function ProdutoUpsert() {
  const params = useParams()
  const tudoPromise = nuvem(params.produtoId)
  return (
    <Suspense fallback={<div>carregando dados...</div>}>
      <Conteudo tudoPromise={tudoPromise} />
    </Suspense>
  )
}
