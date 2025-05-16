import { memo } from "react";
import { useDispatch } from "react-redux";
import { useRendersCount } from "react-use";

const ESTILO = {
  marginTop: "5px",
  marginBottom: "5px",
  backgroundColor: "#fcb0a9",
};

function CartItem({ bean }) {
  const rendersCount = useRendersCount();
  const dispatch = useDispatch();
  const tarefa1 = () => {
    dispatch({ type: "PLUS_QUANTIDADE", identifier: bean.identifier });
  };
  const tarefa2 = () => {
    dispatch({ type: "REMOVER", identifier: bean.identifier });
  };
  return (
    <div style={ESTILO}>
      <div>
        <small>count {rendersCount}</small>
      </div>
      <div>
        <i>{bean.identifier}</i>
      </div>

      <div className="row">
        <div className="col-auto">
          <div>
            <small>descricao</small>
          </div>
          <div>{bean.descricao}</div>
        </div>
        <div className="col-auto">
          <div>
            <small>valor</small>
          </div>
          <div>{bean.valor}</div>
        </div>
        <div className="col-auto">
          <div>
            <small>quantidade</small>
          </div>
          <div>{bean.quantidade}</div>
        </div>
      </div>

      <div>
        <button onClick={tarefa2}>delete</button>
        &nbsp;
        <button onClick={tarefa1}>plus</button>
      </div>
    </div>
  );
}

export default memo(CartItem);
