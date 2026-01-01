import axios from 'axios'
import check from 'check-types'
import invariant from 'invariant'
import { get } from 'lodash-es'
import delay from 'delay'

// invariant tem o mesmo comportamento de check-types

function buildMessage(e) {
  return get(e, 'response.data.message', e.name)
}

export async function fetcherTimeline() {
  await delay(1000)
  const { data } = await axios('/ws/timeline')
  return data
}

export async function fetcherProdutos() {
  const { data } = await axios('/ws/produtos')
  return data
}

export async function fetcherCategorias() {
  try {
    const { data } = await axios('/ws/categorias')
    return data
  } catch {
    return []
  }
}

export async function fetcherItens(isoDate) {
  invariant(check.nonEmptyString(isoDate), 'VAZIO para fetcherItens')
  await delay(2000)
  const { data } = await axios('/ws/itens/' + isoDate)
  return data
}

export async function fetcherIndice(isoDate) {
  await delay(3000)

  const { data } = await axios('/ws/indice/' + isoDate)
  return data
}

export async function fetcherSandbox() {
  await axios('/ws/birds/sandbox')
}

export async function fetcherRelatorio(a, b) {
  await delay(2000)
  const { data } = await axios.post('/ws/relatorio', { gte: a, lte: b })
  return data
}

export async function fetcherProduto(produtoId) {
  const { data } = await axios('/ws/produtos/' + produtoId)
  return data
}

export async function fetcherGrafico(entrada) {
  await delay(2000)
  const { data } = await axios('/ws/grafico/' + entrada)
  return data
}

export async function mutateProduto(o) {
  try {
    const dto = {
      ...o,
      categoriaId: get(o, 'categoria.id', null)
    }
    await axios.put('/ws/upsert_produto', dto)
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function fetcherVenda(v) {
  try {
    const { data } = await axios('/ws/build_venda/' + v)
    return data
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function mutateApagarVendas(entrada) {
  check.assert.array(entrada, 'entrada NÃO É ARR')
  try {
    await axios.post('/ws/apagar_vendas', entrada)
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}
