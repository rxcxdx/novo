import { useState } from 'react'
import { fetcherGraficoDias, fetcherGraficoUsernames } from './api'
import { FormularioMes, FormularioDia } from './formularios'
import GraficoRosca from './GraficoRosca'
import GraficoBarra from './GraficoBarra'

export function BoxGraficoBarra() {
  const [state, setState] = useState({})
  return (
    <div>
      <FormularioMes fetcher={fetcherGraficoDias} onSuccess={setState} />
      <GraficoBarra payload={state} />
    </div>
  )
}

export function BoxGraficoRosca() {
  const [state, setState] = useState({})
  return (
    <div>
      <FormularioDia onSuccess={setState} fetcher={fetcherGraficoUsernames} />
      <GraficoRosca payload={state} />
    </div>
  )
}
