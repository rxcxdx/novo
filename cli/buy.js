import axios from 'axios'

const dto = {
  username: 'zeca',
  cart: [
    {
      valor: 1,
      quantidade: 2,
      descricao: 'laranja',
    }
  ]
}

try {
  const { data } = await axios.post('http://localhost:8000/ws/buy', dto)
  console.log(data)
} catch (e) {
  console.log('erro fatal!')
  console.log(e.response.status)
  console.log(e.response.data)
}
