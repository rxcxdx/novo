import { useState } from "react";
import { diaAtual } from "./ajuda";
import { useForm } from "react-hook-form";
import { fetchIndice } from "./api";
import toast from "react-hot-toast";
import { useErrorBoundary } from "react-error-boundary";
import TabelaIndice from "./TabelaIndice";

const ESTILOS = {
  small: { fontSize: ".8rem" },
};

const ESTADO_INICIAL = {
  gte: diaAtual,
  lte: diaAtual,
};

export default function Indice() {
  const { showBoundary } = useErrorBoundary();
  const [state, setState] = useState({});
  const {
    reset,
    register,
    handleSubmit,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: ESTADO_INICIAL,
  });
  const pesquisar = async (o) => {
    try {
      const data = await fetchIndice(o);
      setState(data);
    } catch (err) {
      showBoundary(err);
    }
  };
  const reiniciarComponente = () => {
    reset();
    setState({});
  };
  const FLAG = isSubmitSuccessful && !isSubmitting;
  return (
    <div>
      <div>
        <button
          className="btn btn-warning btn-sm"
          onClick={reiniciarComponente}
        >
          reiniciarComponente
        </button>
      </div>
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
            <div style={ESTILOS.small}>tamanhoCart</div>
            <input
              style={{ width: "6rem" }}
              type="number"
              step={1}
              {...register("tamanhoCart", {
                valueAsNumber: true,
              })}
            />
          </div>
          <div className="col-auto">
            <div style={ESTILOS.small}>obsExiste</div>
            <input type="checkbox" {...register("obsExiste")} />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </form>
      {FLAG && (
        <div>
          <div>
            <div>inicio: {state.inicio}</div>
            <div>fim: {state.fim}</div>
            <div>quantVendas: {state.quantVendas}</div>
          </div>
          <TabelaIndice
            vendas={state.vendas}
            onSuccessApagar={() => {
              toast.success("sucesso apagar");
              reiniciarComponente();
            }}
          />
        </div>
      )}
    </div>
  );
}
