export default function BoxBean({ bean }) {
  return (
    <div style={{ fontSize: '.8rem'}}>
      <div className="row g-3">
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
          <div>subtotal</div>
          {bean.subtotal}
        </div>
        <div className="col-auto">
          <div>identifier</div>
          {bean.identifier}
        </div>
      </div>
    </div>
  );
}
