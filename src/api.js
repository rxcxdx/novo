import axios from 'axios'
import delay from 'delay'

const estadoInicialProduto = {
  valor: null,
  descricao: '',
  categoriaId: null
}

export async function fetchProduto(produtoId) {
  if (!produtoId) return estadoInicialProduto
  await delay(500)
  const response = await axios('/ws/produto/' + produtoId)
  return response.data
}

export async function fetchCategorias() {
  await delay(500)
  const response = await axios('/ws/categorias')
  return response.data
}

export async function buy(o) {
  await delay(500)
  const response = await axios.post('/ws/buy', o)
  return response.data
}

export async function gravarProduto(o) {
  await delay(600)
  await axios.post('/ws/gravar_produto', o)
}

export async function gravarDespesa(o) {
  await delay(500)
  await axios.post('/ws/criar_despesa', o)
}

export async function fetchVenda(v) {
  await delay(500)
  const response = await axios('/ws/venda/' + v)
  return response.data
}

export async function fetchGrafico(v) {
  await delay(600)
  const response = await axios('/ws/grafico', { params: { mes: v } })
  return response.data
}

export async function fetchTimeline() {
  await delay(600)
  const response = await axios('/ws/timeline')
  return response.data
}

export async function fetchIndice(objDayJs) {
  await delay(600)
  const response = await axios('/ws/indice', { params: { dia: objDayJs.format('YYYY-MM-DD') } })
  return response.data
}

export async function fetchLoja() {
  await delay(300)
  const response = await axios('/ws/loja')
  return response.data
}

export async function fetchProdutos() {
  const response = await axios('/ws/produtos')
  return response.data
}

export async function fetchRelatorio(alpha, beta) {
  await delay(600)
  const response = await axios('/ws/relatorio', {
    params: { gte: alpha, lte: beta }
  })
  return response.data
}

