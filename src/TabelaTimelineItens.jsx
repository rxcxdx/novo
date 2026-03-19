import { ESTILO_TABELA_1, ESTILO_TABELA_2 } from './estilos'

export default function TabelaTimelineItens({ dataSource }) {
  const linhas = dataSource.map((o, i) => (
    <tr key={i}>
      <td className={ESTILO_TABELA_2}>{o.descricao}</td>
      <td className={ESTILO_TABELA_2}>{o.valor}</td>
      <td className={ESTILO_TABELA_2}>{o.quantidade}</td>
      <td className={ESTILO_TABELA_2}>{o.subtotal}</td>
      <td className={ESTILO_TABELA_2}>{o.obs}</td>
    </tr>
  ))
  return (
    <table className={ESTILO_TABELA_1}>
    <thead>
      <tr>
        <th className={ESTILO_TABELA_2}>descricao</th>
        <th className={ESTILO_TABELA_2}>valor</th>
        <th className={ESTILO_TABELA_2}>qnt</th>
        <th className={ESTILO_TABELA_2}>subtotal</th>
        <th className={ESTILO_TABELA_2}>obs</th>
      </tr>
    </thead>
    <tbody>{linhas}</tbody>
  </table>
  )
}
