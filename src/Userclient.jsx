import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { fetchUserclient, mutationAtualizarUserclient } from "./api";
import { useErrorBoundary } from "react-error-boundary";

export default function Userclient() {
  const routerParams = useParams();
  const navigate = useNavigate();
  const { showBoundary } = useErrorBoundary();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isLoading },
  } = useForm({
    defaultValues: () => fetchUserclient(routerParams.userclientId),
  });

  const atualizar = async (o) => {
    try {
      await mutationAtualizarUserclient(o);
      navigate("/sucesso");
    } catch (err) {
      showBoundary(err);
    }
  };

  if (isLoading)
    return <div style={{ fontSize: "2rem" }}>loading userclient....</div>;

  return (
    <div>
      <form
        onSubmit={handleSubmit(atualizar)}
        className="border border-dark p-1 my-3"
      >
        <div>username</div>
        <div>
          <input type="text" {...register("username")} />
        </div>
        <div>senha</div>
        <div>
          <input type="text" {...register("senha")} />
        </div>
        <div>access_token</div>
        <div>
          <input
            type="text"
            {...register("access_token", {
              disabled: true,
            })}
          />
        </div>
        <div>superuser</div>
        <div>
          <input type="checkbox" {...register("superuser")} />
        </div>
        <div>liberado</div>
        <div>
          <input type="checkbox" {...register("liberado")} />
        </div>
        <div>
          <button disabled={isSubmitting} type="submit">
            Atualizar
          </button>
        </div>
      </form>
    </div>
  );
}
