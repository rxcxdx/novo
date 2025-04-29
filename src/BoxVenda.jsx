import { FormattedNumber } from "react-intl";

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
          <FormattedNumber value={venda.total} style="currency" currency="BRL" />
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
  );
}
