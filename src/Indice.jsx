import { useActionState } from "react";
import { FixedSizeList } from "react-window";
import { LinkVenda } from "./links";
import {size} from "lodash-es";
import dayjs from "dayjs";
import { fetchIndice } from "./api";
import { diaAtual } from "./ajuda";

export default function Indice() {
  const [state, formAction, isPending] = useActionState(fetchIndice, {});
  return (
    <div>
      <div>devolve obj</div>  
        <form action={formAction}>
          <div className="row g-1">
            <div className="col-auto">
              <input name="gte" type="date" defaultValue={diaAtual} />
            </div>
            <div className="col-auto">
              <input name="lte" type="date" defaultValue={diaAtual} />
            </div>
            <div className="col-12">
              <button disabled={isPending} type="submit">
                pesquisar
              </button>
            </div>
          </div>
        </form>
      <div>inicio: {state.inicio}</div>
      <div>fim: {state.fim}</div>
      <div>quantVendas: {state.quantVendas}</div>
      <br />
      <FixedSizeList
        itemCount={size(state.vendas)}
        width={500}
        height={300}
        itemSize={35}
      >
        {({ index, style }) => (
          <div style={style}>
            <div className="d-flex gap-2">
              <LinkVenda vendaId={state.vendas[index]._id} />
              <small>
                {dayjs(state.vendas[index].dt).format("DD/MM/YYYY HH:mm:ss")}
              </small>
            </div>
          </div>
        )}
      </FixedSizeList>
    </div>
  );
}
