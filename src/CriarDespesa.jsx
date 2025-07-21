import { useState } from 'react'
import { gravarDespesa } from './api'
import { App, Input, InputNumber, DatePicker } from 'antd'

const estadoInicial = {
  descricao: '',
  valor: null,
  dt: null
}

export default function CriarDespesa() {
  const [state, setState] = useState(estadoInicial)
  const { notification } = App.useApp()
  async function gravar() {
    try {
      const dto = { ...state, dt: state.dt.format('YYYY-MM-DD')}
      console.log(dto)
      await gravarDespesa(dto)
      notification.success({ message: 'sucesso' })
      setState(estadoInicial)
    } catch (error) {
      notification.error({ description: error.name, message: error.message })
    }
  }
  return (
    <div>
      <div className="row g-3">
        <div className="col-12">
          <div>descricao</div>
          <Input
            style={{ width: '300px' }}
            value={state.descricao}
            onChange={(e) => setState({ ...state, descricao: e.target.value })}
          />
        </div>
        <div className="col-12">
          <div>valor</div>
          <InputNumber
            value={state.valor}
            style={{ width: '150px' }}
            onChange={(v) => setState({ ...state, valor: v })}
            precision={2}
            decimalSeparator=","
          />
        </div>
        <div className="col-12">
          <div>dt</div>
          <DatePicker
            value={state.dt}
            onChange={(v) => setState({ ...state, dt: v })}
            format="DD/MM/YYYY"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" onClick={() => gravar()}>
            Gravar
          </button>
        </div>
      </div>
    </div>
  )
}