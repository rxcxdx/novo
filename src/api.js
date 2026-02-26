import dayjs from 'dayjs'
import axios from 'axios'
import delay from 'delay'
import invariant from 'invariant'

function getErrorMessage(error) {
  try {
    return error.response.data.motivo
  } catch {
    return ''
  }
}

function buildError(error) {
  return axios.isAxiosError(error) ? new Error(getErrorMessage(error)) : error
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
  invariant(isoDate, 'isoDate vazio')
  const { data } = await axios('/ws/itens/' + isoDate)
  return data
}

export async function fetcherProduto(id) {
  const { data } = await axios('/ws/produto/' + id)
  return data
}

export async function mutateApagarProduto(id) {
  await delay(1000)
  await axios.delete('/ws/produto', { params: { id } })
}

export async function mutateApagarVenda(_id) {
  await delay(1000)
  await axios.delete('/ws/venda/' + _id)
}

export async function mutateProduto(o) {
  try {
    await axios.put('/ws/produto', o)  
  } catch (error) {
    throw buildError(error)
  }
  
}

export async function fetcherLucro(alpha, beta) {
  try {
    const { data } = await axios.post('/ws/lucro', {
      alpha,
      beta
    })
    return data
  } catch (error) {
    throw buildError(error)
  }
}

export async function fetcherVenda(_id) {
  const { data } = await axios('/ws/venda/' + _id)
  return data
}

export async function fetcherGrafico(isoMonth) {
  invariant(isoMonth, 'isoMonth vazio')
  await delay(1000)
  const { data } = await axios('/ws/grafico/' + isoMonth)
  return data
}

export async function fetcherIndice(a, b) {
  const dto = {
    gte: dayjs(a).startOf('d').format(),
    lte: dayjs(b).endOf('d').format()
  }
  const { data } = await axios.post('/ws/indice', dto)
  return data
}

export async function fetcherRelatorio(a, b, c) {
  await delay(1000)
  const dto = {
    gte: dayjs(a).startOf('d').format(),
    lte: dayjs(b).endOf('d').format(),
    username: c
  }
  const { data } = await axios.post('/ws/relatorio', dto)
  return data
}

export async function mutateBuy(dto) {
  try {
    const { data } = await axios.post('/ws/buy', dto)
  return data
  } catch (error) {
    throw buildError(error)
  }
}

export async function fetcherLoja() {
  const { data } = await axios('/ws/loja')
  return data
}

export async function fetcherLogin(a, b) {
  const { data } = await axios('/ws/login', {
    auth: {
      username: a,
      password: b
    }
  })
  return data
}
