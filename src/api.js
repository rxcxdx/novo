import axios from 'axios'
import delay from 'delay'

export async function fetcherVenda(v) {
  const response = await axios('/ws/vendas/' + v)
  return response.data
}

export async function fetcherTimeline() {
  const response = await axios('/ws/timeline')
  return response.data
}

export async function fetcherProdutos() {
  const response = await axios('/ws/produtos')
  return response.data
}

export async function fetcherProduto(v) {
  await delay(800)
  const response = await axios('/ws/produtos/' + v)
  return response.data
}

export async function fetcherUserclients() {
  await delay(800)
  const { data } = await axios('/ws/userclients')
  return data
}

