import dayjs from 'dayjs'
import axios from 'axios'
import util from 'util'
const diaAtual = dayjs().format('YYYY-MM-DD')
const dto = {
  gte: diaAtual,
  lte: diaAtual
}
const { data } = await axios.post('http://localhost:8000/ws/relatorio', dto)
console.log(util.inspect(data, { depth: 0 }))
