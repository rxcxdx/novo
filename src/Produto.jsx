import { useForm } from "react-hook-form";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate, useParams } from "react-router";
import { fetchProduto, mutationAtualizarProduto } from "./api";

export default function Produto() {
  const routerParams = useParams();
  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  const {
    formState: { isSubmitting, isLoading },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: () => fetchProduto(routerParams.productId),
  });
  
  
  const atualizar = async (o) => {
    try {
      await mutationAtualizarProduto(o);
      navigate("/sucesso");
    } catch (err) {
      showBoundary(err);
    }
  };
  if (isLoading)
    return <div style={{ fontSize: "2rem" }}>loading produto....</div>;
  return (
    <form onSubmit={handleSubmit(atualizar)} className="border border-dark p-1">
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

    <div>
      <button disabled={isSubmitting} type="submit">
        Atualizar
      </button>
    </div>
  </form>
  );
}
