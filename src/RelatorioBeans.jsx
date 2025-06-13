import { useState } from "react";
import { diaAtual } from "./ajuda";
import { fetchRelatorioBeans } from "./api";
import { useForm } from "react-hook-form";
import TabelaRelatorioBeans from "./TabelaRelatorioBeans";
import { useErrorBoundary } from "react-error-boundary";

const ESTILOS = {
  small: { fontSize: ".8rem" },
};

const ESTADO_INICIAL = {
  gte: diaAtual,
  lte: diaAtual,
};

export default function RelatorioBeans() {
  const { showBoundary } = useErrorBoundary();
  const [state, setState] = useState({});
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: ESTADO_INICIAL,
  });



  const pesquisar = async (o) => {
    try {
      const data = await fetchRelatorioBeans(o);
    setState(data);
    } catch(err) {
      showBoundary(err)
    }
  }; 



  return (
    <div>
      <form onSubmit={handleSubmit(pesquisar)}>
        <div className="row g-3">
          <div className="col-auto">
            <div style={ESTILOS.small}>gte</div>
            <input type="date" {...register("gte")} />
          </div>
          <div className="col-auto">
            <div style={ESTILOS.small}>lte</div>
            <input type="date" {...register("lte")} />
          </div>
          <div className="col-auto">
            <div style={ESTILOS.small}>descricao (metodo includes)</div>
            <input type="text" {...register("descricao")} />
          </div>
          <div className="col-12">
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </form>
      {isSubmitSuccessful && (
        <div>
          <div>inicio: {state.inicio}</div>
          <div>fim: {state.fim}</div>
          <div>itens: {state.itens}</div>
          <div>total: {state.total}</div>
          <TabelaRelatorioBeans relatorio={state.relatorio} />
        </div>
      )}
    </div>
  );
}
