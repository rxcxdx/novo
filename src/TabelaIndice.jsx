import { useState } from "react";
import { FixedSizeList } from "react-window";
import { Set } from "immutable";
import { LinkVenda } from "./links";
import ModalVenda from "./ModalVenda";
import ApagarVendas from "./ApagarVendas";
import Horario from "./Horario";
import check from "check-types";
import { FaInfo } from "@react-icons/all-files/fa/FaInfo";

const ALTURA = 600;

function Observacao({ obs }) {
  return check.string(obs) ? <i className="text-danger">{obs}</i> : <FaInfo />;
}

// vendas SEMPRE EXISTE
export default function TabelaIndice({ vendas, onSuccessApagar }) {
  // useMount(() => console.log("MOUNTED TabelaIndice "));
  // useUnmount(() => console.log("UNMOUNTED TabelaIndice"));
  const [selectedRowKeys, setSelectedRowKeys] = useState(Set());
  const toggle = (index) => {
    const v = vendas[index]._id;
    selectedRowKeys.has(v)
      ? setSelectedRowKeys(selectedRowKeys.delete(v))
      : setSelectedRowKeys(selectedRowKeys.add(v));
  };
  const todas = () => {
    setSelectedRowKeys(Set(vendas.map((o) => o._id)));
  };
  return (
    <div className="border border-dark">
      <div>selectedRowKeys: {selectedRowKeys.size}</div>
      <div className="d-flex gap-2">
        <button className="btn btn-secondary btn-sm" onClick={todas}>
          Todas
        </button>
        <ApagarVendas
          selectedRowKeys={selectedRowKeys.toArray()}
          onSuccessApagar={onSuccessApagar}
        />
      </div>
      <FixedSizeList
        itemCount={vendas.length}
        width={900}
        height={ALTURA}
        itemSize={35}
      >
        {({ index, style }) => (
          <div style={style}>
            <div className="hstack gap-3">
              <input
                type="checkbox"
                checked={selectedRowKeys.has(vendas[index]._id)}
                onChange={() => toggle(index)}
              />
              <ModalVenda vendaId={vendas[index]._id} />
              <LinkVenda vendaId={vendas[index]._id} />
              <Horario payload={vendas[index].dt} />
              <small>{vendas[index].username}</small>
              <Observacao obs={vendas[index].obs} />
              <small>{vendas[index].dt}</small>
            </div>
          </div>
        )}
      </FixedSizeList>
    </div>
  );
}
