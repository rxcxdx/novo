import { Formik, Field, Form } from "formik";
import { useEffect, useState } from "react";
import { Set } from "immutable";
import Apagar from "./Apagar";
import { diaAtual } from "./ajuda";
import { FixedSizeList } from "react-window";
import { LinkVenda } from "./links";
import { useRendersCount } from "react-use";
import size from "lodash-es/size";
import map from "lodash-es/map";
import { fetchIndice } from "./api";
import dayjs from "dayjs";
import { useError } from "react-use";

const initialValues = {
  gte: diaAtual,
  lte: diaAtual,
};

export default function Indice() {
  const rendersCount = useRendersCount();
  const dispatchError = useError();
  const [state, setState] = useState({});
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
  const pesquisar = async (o) => {
    try {
      const data = await fetchIndice(o);
      setState(data);
    } catch (err) {
      dispatchError(err);
    }
  };
  useEffect(() => {
    setChaves(Set([]));
  }, [state]);
  return (
    <div>
      <div>devolve obj</div>
      <div>Renders count: {rendersCount}</div>

      <div className="border border-dark p-1">
        <Formik initialValues={initialValues} onSubmit={pesquisar}>
          {({ isSubmitting }) => (
            <Form>
              <div className="row gap-1">
                <div className="col-auto">
                  <div>
                    <Field name="gte" type="date" />
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <Field name="lte" type="date" />
                  </div>
                </div>
                <div className="col-12">
                  <button disabled={isSubmitting} type="submit">
                    pesquisar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div>inicio: {state.inicio}</div>
      <div>fim: {state.fim}</div>
      <div>linhas: {state.linhas}</div>
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
              <input
                type="checkbox"
                checked={chaves.has(state.vendas[index]._id)}
                onChange={() => toggle(index)}
              />
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
