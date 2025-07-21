const ESTILO = { backgroundColor: '#d3dfed' }

export default function BoxVenda({ venda }) {
  return (
    <div style={ESTILO}>
      <div className="row">
        <div className="col-auto">
          <div>_id</div>
          {venda._id}
        </div>
        <div className="col-auto">
          <div>dt</div>
          {venda.dt}
        </div>
        <div className="col-auto">
          <div>username</div>
          {venda.username}
        </div>


        <div className="col-auto">
          <div>total</div>
          {venda.total}
        </div>

        <div className="col-auto">
          <div>itens</div>
          {venda.itens}
        </div>


        <div className="col-auto">
          <div>obs</div>
          {venda.obs}
        </div>
      </div>
    </div>
  )
}
