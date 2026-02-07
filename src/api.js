import axios from 'axios'
import delay from 'delay'

function getErrorMessage(error) {
  try {
    return error.response.data
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

export async function fetcherVenda(_id) {
  try {
    const { data } = await axios('/ws/venda', { params: { _id } })
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
  try {
    const { data } = await axios('/ws/indice', { params: { isoDate } })
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function fetcherRelatorio(entrada) {
  await delay(1000)
  try {
    const { data } = await axios.post('/ws/relatorio', entrada)
    return data
  } catch (e) {
    throw buildError(e)
  }
}

export async function mutateBuy(dto) {
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

export async function fetcherLogin(formulario) {
 try {
  const { data } = await axios('/ws/login', {
    auth: {
      username: formulario.username,
      password: formulario.password
    }
  })
  return data
 } catch (e) {
  throw buildError(e)
  
 }
}
