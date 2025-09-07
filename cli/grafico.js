import axios from 'axios'
import util from 'util'
import dayjs from 'dayjs'
const mesAtual = dayjs().format('YYYY-MM')
const { data } = await axios('http://localhost:8000/ws/grafico_usernames/' + mesAtual)
console.log(util.inspect(data, { depth: 1 }))
