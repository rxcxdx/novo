const ESTILO = { backgroundColor: "cyan", border: "1px dashed black" };

export default function BoxBean({ bean }) {
  return (
    <div style={ESTILO}>
      <div className="row">
        <div className="col-auto">
          <div>descricao</div>
          {bean.descricao}
        </div>
        <div className="col-auto">
          <div>valor</div>
          {bean.valor}
        </div>
        <div className="col-auto">
          <div>quantidade</div>
          {bean.quantidade}
        </div>
        <div className="col-auto">
          <div>identifier</div>
          {bean.identifier}
        </div>
        <div className="col-auto">
          <div>subtotal</div>
          {bean.subtotal}
        </div>
      </div>
    </div>
  );
}
