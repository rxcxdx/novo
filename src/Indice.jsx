import { useActionState, useEffect, useState } from "react";
import { FormattedDate, FormattedTime } from "react-intl";
import { Set } from "immutable";
import { fetchIndice } from "./api";
import Apagar from "./Apagar";
import { diaAtual } from "./ajuda";
import { FixedSizeList } from "react-window";
import { LinkVenda } from "./links";
import { useRendersCount } from "react-use";
import size from "lodash-es/size";
import map from "lodash-es/map";

export default function Indice() {
  const rendersCount = useRendersCount();
  const [state, formAction, isPending] = useActionState(fetchIndice, {});
  const [chaves, setChaves] = useState(Set([]));
  const toggle = (index) => {
    const v = state.vendas[index]._id;
    chaves.has(v) ? setChaves(chaves.delete(v)) : setChaves(chaves.add(v));
  };
  const nada = () => {
    setChaves(chaves.clear());
  };
  const tudo = () => {
    setChaves(Set(map(state.vendas, "_id")));
  };
  useEffect(() => {
    setChaves(Set([]));
  }, [state]);
  return (
    <div>
      <div>devolve obj</div>
      <div>Renders count: {rendersCount}</div>
      <div>
        <form action={formAction}>
          <div className="row g-2">
            <div className="col-auto">
              <input defaultValue={diaAtual} name="gte" type="date" />
            </div>
            <div className="col-auto">
              <input defaultValue={diaAtual} name="lte" type="date" />
            </div>
            <div className="col-12">
              <button type="submit" disabled={isPending}>
                Pesquisar
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>inicio: {state.inicio}</div>
      <div>fim: {state.fim}</div>
      <div>linhas: {size(state.vendas)}</div>
      <div>selecionadas: {chaves.size}</div>
      <div className="d-flex gap-3 align-items-center">
        <Apagar chaves={chaves} />
        <small type="button" onClick={() => console.log(chaves.toArray())}>
          ler selecionados
        </small>
        <small type="button" onClick={nada}>
          nada
        </small>
        <small type="button" onClick={tudo}>
          tudo
        </small>
      </div>
      <FixedSizeList
        itemCount={size(state.vendas)}
        width={500}
        height={300}
        itemSize={35}
      >
        {({ index, style }) => (
          <div style={style}>
            <div className="d-flex gap-2">
              <input
                type="checkbox"
                checked={chaves.has(state.vendas[index]._id)}
                onChange={() => toggle(index)}
              />
              <LinkVenda vendaId={state.vendas[index]._id} />
              <small>
                <FormattedDate value={state.vendas[index].dt} />
              </small>
              <small>
                <FormattedTime
                  value={state.vendas[index].dt}
                  hour="numeric"
                  minute="numeric"
                  second="numeric"
                />
              </small>
            </div>
          </div>
        )}
      </FixedSizeList>
    </div>
  );
}
