import axios from 'axios'
import delay from 'delay'

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
  const { data } = await axios('/ws/itens/' + isoDate)
  return data
}

export async function fetcherProduto(id) {
  try {
    const { data } = await axios('/ws/produto/' + id)
    return data
  } catch (error) {
    throw buildError(error)
  }
}

export async function mutateApagarProduto(id) {
  try {
    await delay(1000)
    await axios.delete('/ws/produto/' + id)
  } catch (error) {
    throw buildError(error)
  }
}

export async function mutateApagarVenda(_id) {
  try {
    await delay(1000)
    await axios.delete('/ws/venda/' + _id)
  } catch (error) {
    throw buildError(error)
  }
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
  try {
    const { data } = await axios('/ws/venda/' + _id)
    return data
  } catch (error) {
    throw buildError(error)
  }
}

export async function fetcherGrafico(isoMonth) {
  try {
    const { data } = await axios('/ws/grafico/' + isoMonth)
    return data
  } catch (error) {
    throw buildError(error)
  }
}

export async function fetcherIndice(formulario) {
  try {
    const { data } = await axios.post('/ws/indice', formulario)
    return data
  } catch (error) {
    throw buildError(error)
  }
}

export async function fetcherRelatorio(formulario) {
  try {
    const { data } = await axios.post('/ws/relatorio', formulario)
    return data
  } catch (error) {
    throw buildError(error)
  }
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
