import axios from 'axios'
import check from 'check-types'
import { get } from 'lodash-es'
//import delay from 'delay'

function buildMessage(error) {
  return get(error, 'response.data.message')
}

export async function fetcherTimeline() {
  const { data } = await axios('/ws/timeline')
  return data
}

export async function fetcherProdutos() {
  const { data } = await axios('/ws/produtos')
  return data
}



export async function fetcherItens(isoDate) {
  check.assert.string(isoDate, 'fetcherItens NÃO RECEBEU string')
  try {
    const { data } = await axios('/ws/itens', { params: { isoDate }})
    return data
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function fetcherSandbox() {
  await axios('/ws/birds/sandbox')
}

export async function fetcherProduto(produtoId) {
  const { data } = await axios('/ws/produto/' + produtoId)
  return data
}

export async function mutateProduto(o) {
  try {
    await axios.put('/ws/upsert_produto', o)
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
  try {
    await axios.post('/ws/apagar_vendas', Array.from(entrada))
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function fetcherGrafico(isoMonth) {
  
  try {
    const { data } = await axios('/ws/grafico', { params: { isoMonth } })
    return data
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function fetcherIndice(isoDate) {
  check.assert.string(isoDate, 'fetcherIndice NÃO RECEBEU string')
  try {
    const { data } = await axios('/ws/indice', { params: { isoDate } })
    return data
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}

export async function fetcherRelatorio(entrada) {
  check.assert.object(entrada, 'fetcherRelatorio NÃO RECEBEU obj')
  try {
    const { data } = await axios.post('/ws/relatorio', entrada)
    return data
  } catch (e) {
    throw new Error(buildMessage(e))
  }
}
