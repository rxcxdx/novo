import clean from "clean-deep";
import toast from "react-hot-toast";
import BoxError from "./BoxError";
import { useForm } from "react-hook-form";
import axios from "axios";
import delay from "delay";
import { ScaleLoader } from "react-spinners";
import { useErrorBoundary } from "react-error-boundary";
import Bool from "./Bool";

async function gravarUserclient(o) {
  const dto = clean(o);
  await delay(500);
  await axios.post("/gravar_userclient", dto);
}

export default function Userclient({ userclientId }) {
  const { showBoundary } = useErrorBoundary();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isLoading, isSubmitSuccessful, isDirty },
  } = useForm({
    defaultValues: async () => {
      try {
        await delay(300);
        const response = await axios("/userclient/" + userclientId);
        return response.data;
      } catch (err) {
        showBoundary(err);
      }
    },
  });
  const gravar = async (o) => {
    try {
      await gravarUserclient(o);
    } catch (err) {
      toast.error(<BoxError payload={err} />);
      throw err;
    }
  };
  if (isSubmitSuccessful) return <h1>sucesso</h1>;
  if (isLoading) return <ScaleLoader />;
  return (
    <div>
      <div>
        <b>
          isDirty: <Bool value={isDirty} />
        </b>
      </div>
      <form onSubmit={handleSubmit(gravar)}>
        <div className="row g-1">

          <div className="col-12">
            <div>updatedAt</div>
            <input type="text" {...register("updatedAt", { disabled: true })} />
          </div>

          <div className="col-12">
            <div>createdAt</div>
            <input type="text" {...register("createdAt", { disabled: true })} />
          </div>

          <div className="col-12">
            <div>id</div>
            <input
              className="border border-primary"
              readOnly
              type="text"
              {...register("id")}
            />
          </div>
          <div className="col-12">
            <div>username</div>
            <input type="text" {...register("username")} />
          </div>
          <div className="col-12">
            <div>senha</div>
            <input type="text" {...register("senha")} />
          </div>
          <div className="col-12">
            <input type="checkbox" {...register("liberado")} />
            &nbsp;
            <span>liberado</span>
          </div>
          <div className="col-12">
            <div>access_token</div>
            <input
              style={{ width: "100%" }}
              type="text"
              {...register("access_token", { disabled: true })}
            />
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              disabled={isSubmitting}
              type="submit"
            >
              Atualizar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
