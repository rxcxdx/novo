import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useErrorBoundary } from "react-error-boundary";
import { mutationCriarDespesa } from "./api";

const estadoInicial = { descricao: "", valor: 0, dt: "" }

export default function CriarDespesa() {
  const { showBoundary } = useErrorBoundary();
  const {
    formState: { isSubmitting },
    register,
    handleSubmit,
    reset,
    getValues,
  } = useForm({
    defaultValues: estadoInicial
  });
  const gravar = async (o) => {
    try {
      await mutationCriarDespesa(o);
      toast.success("sucesso");
      reset();
    } catch (err) {
      showBoundary(err);
    }
  };
  return (
    <div>
      <div>
        <button onClick={() => reset()}>reset</button>
      </div>
      <div>
        <button onClick={() => console.log(getValues())}>ler formulario</button>
      </div>
      <form
        onSubmit={handleSubmit(gravar)}
        className="border border-dark p-1 my-3"
      >
        <div>descricao</div>
        <div>
          <input type="text" {...register("descricao")} />
        </div>
        <div>valor (separador é virgula)</div>
        <div>
          <input
            type="number"
            step={0.01}
            {...register("valor", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div>dt</div>
        <input type="date" {...register("dt")} />
        <div>
          <button disabled={isSubmitting} type="submit">
            Gravar
          </button>
        </div>
      </form>
    </div>
  );
}
