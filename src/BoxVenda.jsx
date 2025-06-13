import Horario from "./Horario";

const ESTILO = { backgroundColor: "#d3dfed"};

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
          <div><b>total</b></div>
          {venda.total}
        </div>
        <div className="col-auto">
          <div><b>itens</b></div>
          {venda.itens}
        </div>
        <div className="col-auto">
          <div>obs</div>
          {venda.obs}
        </div>

        <div className="col-auto">
          <div><b>horario</b></div>
          <Horario payload={venda.dt}/>
        </div>


      </div>
    </div>
  );
}


