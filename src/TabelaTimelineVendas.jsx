import { ESTILO_TABELA_1, ESTILO_TABELA_2 } from './estilos'
import { LinkVenda } from './indice'

export default function TabelaTimelineVendas({ dataSource }) {
  const linhas = dataSource.map((o, i) => (
    <tr key={i}>
      <td className={ESTILO_TABELA_2}><LinkVenda value={o._id} /></td>
      <td className={ESTILO_TABELA_2}>{o.total}</td>
      <td className={ESTILO_TABELA_2}>{o.obs}</td>
    </tr>
  ))
  return (
    <table className={ESTILO_TABELA_1}>
      <thead>
        <tr>
          <th className={ESTILO_TABELA_2}>_id</th>
          <th className={ESTILO_TABELA_2}>total</th>
          <th className={ESTILO_TABELA_2}>obs</th>
        </tr>
      </thead>
      <tbody>{linhas}</tbody>
    </table>
  )
}
