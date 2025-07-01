import axios from 'axios'

export async function fetchProdutos() {
  const response = await axios('/ws/produtos')
  return response.data
}