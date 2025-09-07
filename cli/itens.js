import axios from 'axios'
import util from 'util'
import dayjs from 'dayjs'
const diaAtual = dayjs().format('YYYY-MM-DD')
const { data } = await axios('http://localhost:8000/ws/itens/' + diaAtual)
console.log(util.inspect(data, { depth: 1 }))
