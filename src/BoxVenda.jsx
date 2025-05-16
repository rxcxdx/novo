const ESTILO = { backgroundColor: "#d3dfed", border: "1px dashed black" };

export default function BoxVenda({ venda }) {
  return (
    <div style={ESTILO}>
      <div className="row">
        <div className="col-auto">
          <div>_id</div>
          {venda._id}
        </div>
        <div className="col-auto">
          <div>dt (iso)</div>
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

        <div className="col-auto">
          <div>dia</div>
          {venda.dia}
        </div>

        <div className="col-auto">
          <div>hora</div>
          {venda.hora}
        </div>
      </div>
    </div>
  );
}
