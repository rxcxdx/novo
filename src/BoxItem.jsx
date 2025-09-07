import Copiar from './Copiar'

export default function BoxItem({ item }) {
  return (
    <div>
      <div>
        <span>identifier: {item.identifier}</span>&nbsp;
        <Copiar value={item.identifier} />
      </div>
      <div>descricao: {item.descricao}</div>
      <div>valor: {item.valor}</div>
      <div>quantidade: {item.quantidade}</div>
      <div>obs: {item.obs}</div>
    </div>
  )
}
