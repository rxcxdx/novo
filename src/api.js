import invariant from 'invariant'
import axios from 'axios'
import dayjs from './dayjs'
// import delay from 'delay'

function buildGte(v) {
  const j = dayjs(v, 'DD/MM/YYYY', true)
  invariant(j.isValid(), 'gte é inválido')
  return j.startOf('day').toISOString()
}

function buildLte(v) {
  const j = dayjs(v, 'DD/MM/YYYY', true)
  invariant(j.isValid(), 'lte é inválido')
  return j.endOf('day').toISOString()
}

export async function fetcherTimelineVendas() {
  const { data } = await axios('/ws/timeline/vendas')
  return data
}

export async function fetcherTimelineItens() {
  const { data } = await axios('/ws/timeline/itens')
  return data
}

export async function fetcherProdutos() {
  const { data } = await axios('/ws/produtos')
  return data
}

export async function fetcherProduto({ params }) {
  const { data } = await axios('/ws/produto/' + params.id)
  return data
}

export async function fetcherLucro(formulario) {
  const { data } = await axios.post('/ws/lucro', formulario)
  return data
}

export async function fetcherVenda({ params }) {
  const { data } = await axios('/ws/venda/' + params._id)
  return data
}

export async function fetcherGrafico(entrada) {
  const j = dayjs(entrada, 'MM/YYYY', true)
  invariant(j.isValid(), 'mês inválido')
  const isoMonth = j.format('YYYY-MM')
  const { data } = await axios('/ws/grafico/' + isoMonth)
  return data
}

export async function fetcherItens(entrada) {
  const j = dayjs(entrada, 'DD/MM/YYYY', true)
  invariant(j.isValid(), 'dia inválido')
  const isoDate = j.format('YYYY-MM-DD')
  const { data } = await axios('/ws/itens/' + isoDate)
  return data
}

export async function fetcherRelatorio(field1, field2) {
  const dto = {
    gte: buildGte(field1),
    lte: buildLte(field2),
  }
  const { data } = await axios.post('/ws/relatorio', dto)
  return data
}

export async function fetcherIndice(field1, field2) {
  const dto = {
    gte: buildGte(field1),
    lte: buildLte(field2),
  }
  const { data } = await axios.post('/ws/indice', dto)
  return data
}

export async function fetcherLoja() {
  const { data } = await axios('/ws/loja')
  return data
}

// --------------------------------------------------------------

export async function mutateApagarVenda(_id) {
  await axios.delete('/ws/venda/' + _id)
}

export async function mutateApagarProduto(id) {
  await axios.delete('/ws/produto/' + id)
}

export async function mutateBuy(dto) {
  await axios.post('/ws/buy', dto)
}

export async function mutateProduto(o) {
  await axios.put('/ws/produto', o)
}

export async function mutateEditarDt(formulario) {
  await axios.post('/ws/editar/dt', formulario)
}
