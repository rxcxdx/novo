import axios from 'axios'
import util from 'util'

try {
  const { data } = await axios('http://localhost:8000/ws/vendas/LVto_1ABL29CiyA3yZjTT')
  console.log(util.inspect(data, { depth: 0 }))
} catch (e) {
  console.log(util.inspect(e.response.data, { depth: 0 }))
}
