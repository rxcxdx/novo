import Bool from "./Bool";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import delay from "delay";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import BoxError from "./BoxError";
import { useState } from "react";
import { useMount } from "react-use";
import { useErrorBoundary } from "react-error-boundary";

export default function Produto({ produtoId }) {
  const { showBoundary } = useErrorBoundary();
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState(false);
  const {
    reset,
    formState: { isSubmitting, isDirty },
    register,
    handleSubmit,
  } = useForm({
    values: produto,
  });
  const fetchProduto = async () => {
    if (!produtoId) return;
    try {
      console.log("fetchProduto!");
      setLoading(true);
      await delay(1000);
      const response = await axios("/produto/" + produtoId);
      setProduto(response.data);
    } catch (err) {
      showBoundary(err);
    } finally {
      setLoading(false);
    }
  };
  const upsert = async (o) => {
    try {
      await delay(500);
      await axios.post("/gravar_produto", o);
      reset();
      toast.success("upsert!");
    } catch (err) {
      toast.error(<BoxError payload={err} />);
      throw err;
    }
    fetchProduto();
  };
  useMount(() => {
    fetchProduto();
  });
  if (loading) return <BeatLoader />;
  return (
    <div>
            <div>
        <b>
          isDirty: <Bool value={isDirty} />
        </b>
      </div>
      <form onSubmit={handleSubmit(upsert)}>
      <div className="row g-2">
        <div className="col-12">
          <div>id</div>
          <input
            readOnly
            type="text"
            {...register("id")}
            className="border border-primary"
          />
        </div>
        <div className="col-12">
          <div>descricao</div>
          <input type="text" {...register("descricao")} />
        </div>
        <div className="col-12">
          <div>valor (separador é virgula)</div>
          <input
            type="number"
            step={0.01}
            {...register("valor", {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            disabled={isSubmitting}
            type="submit"
          >
            Gravar
          </button>
        </div>
      </div>
    </form>
    </div>
  );
}
