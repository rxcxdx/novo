import { useState, Suspense, use } from 'react'
import Select from 'react-select'
import { useParams } from 'react-router'
import { mutateProduto, fetcherProduto, fetcherCategorias } from '../src/api'
import { toNumber } from 'lodash-es'
import { toastError, toastSuccess } from './utils'

function ProdutoFormulario({ defaultValues, options }) {
  const ESTILO_BTN = 'border border-dashed'
  const [state, setState] = useState(defaultValues)
  const tarefa = async () => {
    try {
      await mutateProduto(state)
      toastSuccess('SUCESSO')
      if (!defaultValues.id) setState(defaultValues)
    } catch (e) {
      toastError(e.message)
    }
  }
  return (
    <div className="w-xs border p-1">
      <div>id: {state.id}</div>
      <div>descricao</div>
      <div>
        <input
          value={state.descricao}
          type="text"
          className="border"
          onChange={(evt) => {
            setState({ ...state, descricao: evt.target.value })
          }}
        />
      </div>
      <div>valor</div>
      <div>
        <input
          className="border"
          type="number"
          value={state.valor}
          onChange={(evt) =>
            setState({ ...state, valor: toNumber(evt.target.value) })
          }
        />
      </div>
      <div>categoria</div>
      <Select
        placeholder="selecione"
        value={state.categoria}
        options={options}
        getOptionLabel={(o) => o.descricao}
        getOptionValue={(o) => o.id}
        isClearable
        onChange={(o) => setState({ ...state, categoria: o })}
        isSearchable={false}
      />
      <br />
      <div className="flex gap-3">
        <button className={ESTILO_BTN} onClick={tarefa}>
          gravar
        </button>
        <button className={ESTILO_BTN} onClick={() => setState(defaultValues)}>
          reset
        </button>
      </div>
    </div>
  )
}

function ProdutoAtualizar({ piecesPromise }) {
  const [doc, options] = use(piecesPromise)
  return <ProdutoFormulario defaultValues={doc} options={options} />
}

export function ProdutoAtualizarContainer() {
  const { produtoId } = useParams()
  const piecesPromise = Promise.all([
    fetcherProduto(produtoId),
    fetcherCategorias()
  ])
  return (
    <div>
      <Suspense fallback={<div>carregando pieces...</div>}>
        <ProdutoAtualizar piecesPromise={piecesPromise} />
      </Suspense>
    </div>
  )
}

function ProdutoNovo({ categoriasPromise }) {
  const options = use(categoriasPromise)
  return (
    <ProdutoFormulario
      defaultValues={{ descricao: '', valor: 0, categoria: null }}
      options={options}
    />
  )
}

export function ProdutoNovoContainer() {
  const categoriasPromise = fetcherCategorias()
  return (
    <div>
      <Suspense fallback={<div>carregando categorias...</div>}>
        <ProdutoNovo categoriasPromise={categoriasPromise} />
      </Suspense>
    </div>
  )
}
