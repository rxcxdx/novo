import axios from 'axios'
import check from 'check-types'
import { get } from 'lodash-es'
import delay from 'delay'

function buildError(error) {
  return axios.isAxiosError(error)
    ? new Error(get(error, 'response.data'))
    : error
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
    const { data } = await axios('/ws/itens', { params: { isoDate } })
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherProduto(id) {
  const { data } = await axios('/ws/produto', { params: { id } })
  return data
}

export async function mutateApagarProduto(id) {
  try {
    const { data } = await axios.delete('/ws/produto', { params: { id } })
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function mutateProduto(o) {
  try {
    await axios.put('/ws/produto', o)
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherVenda(vendaId) {
  try {
    const { data } = await axios('/ws/build_venda', { params: { vendaId } })
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function mutateApagarVendas(entrada) {
  try {
    await delay(800)
    await axios.post('/ws/apagar', entrada)
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherGrafico(isoMonth) {
  try {
    const { data } = await axios('/ws/grafico', { params: { isoMonth } })
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherIndice(isoDate) {
  check.assert.string(isoDate, 'fetcherIndice NÃO RECEBEU string')
  try {
    const { data } = await axios('/ws/indice', { params: { isoDate } })
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherRelatorio(entrada) {
  check.assert.object(entrada, 'fetcherRelatorio NÃO RECEBEU obj')
  await delay(1000)
  try {
    const { data } = await axios.post('/ws/relatorio', entrada)
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function mutateBuy(dto) {
  await delay(1000)
  try {
    const { data } = await axios.post('/ws/buy', dto)
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherLoja() {
  const { data } = await axios('/ws/loja')
  return data
}
