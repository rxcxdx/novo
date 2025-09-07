import Copiar from './Copiar'

export default function BoxVenda({ venda }) {
  return (
    <div>
      <div>
        <span>_id: {venda._id}</span>&nbsp;
        <Copiar value={venda._id} />
      </div>
      <div>dt: {venda.dt}</div>
      <div>username: {venda.username}</div>
      <div>obs: {venda.obs}</div>
      <div>
        <b>total:</b> {venda.total}
      </div>
      <div>itens: {venda.itens}</div>
    </div>
  )
}
