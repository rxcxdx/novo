import axios from 'axios'
import util from 'util'
const { data } = await axios('http://localhost:8000/ws/birds/configuracao')
console.log(util.inspect(data, { depth: 1 }))
