import { useState } from "react";
import Grafico from "./Grafico";
import { fetchGrafico } from "./api";
import { useForm } from "react-hook-form";
import { mesAtual } from "./ajuda";
import { useErrorBoundary } from "react-error-boundary";

const ESTADO_INICIAL = {
  mes: mesAtual,
};
export default function BoxGrafico() {
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
      const data = await fetchGrafico(o);
      setState(data);
    } catch (err) {
      showBoundary(err);
    }
  };
  const FLAG = isSubmitSuccessful && !isSubmitting;
  return (
    <div>
      <form onSubmit={handleSubmit(pesquisar)}>
        <div className="row g-3 align-items-end">
          <div className="col-auto">
            <div>
              <small>Mês</small>
            </div>
            <input {...register("mes")} type="month" />
          </div>
          <div className="col-auto">
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
      {FLAG && (
        <div>
          <Grafico payload={state} />
        </div>
      )}
    </div>
  );
}
