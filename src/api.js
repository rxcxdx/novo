import axios from 'axios'
import delay from 'delay'
import { get } from 'lodash-es'

export async function fetcherTimeline() {
  const { data } = await axios('/ws/timeline')
  return data
}

export async function fetcherProdutos() {
  const { data } = await axios('/ws/produtos')
  return data
}

export async function fetcherCategorias() {
  const { data } = await axios('/ws/categorias')
  return data
}

export async function fetcherItens(dia) {
  await delay(1000)
  const { data } = await axios('/ws/itens/' + dia)
  return data
}

export async function fetcherIndice(dia) {
  await delay(1000)
  const { data } = await axios('/ws/indice/' + dia)
  return data
}

export async function fetcherGraficoUsernames(dia) {
  await delay(1000)
  const { data } = await axios('/ws/grafico_usernames/' + dia)
  return data
}

export async function fetcherSandbox() {
  await axios('/ws/birds/sandbox')
}

export async function fetcherRelatorio(o) {
  await delay(1000)
  const { data } = await axios.post('/ws/relatorio', o)
  return data
}

export async function fetcherProduto(produtoId) {
  const { data } = await axios('/ws/produtos/' + produtoId)
  return data
}

export async function fetcherVenda(v) {
  try {
    const { data } = await axios('/ws/vendas/' + v)
    return data
  } catch (e) {
    throw Error(get(e, 'response.data.message'))
  }
}

export async function fetcherGraficoDias(v) {
  await delay(1000)
  const { data } = await axios('/ws/grafico_dias/' + v)
  return data
}

export async function mutateProduto(o) {
  try {
    await axios.put('/ws/produtos', o)
  } catch (e) {
    throw Error(get(e, 'response.data.message'))
  }
}
