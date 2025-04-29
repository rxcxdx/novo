import { use } from "react";
import { useNavigate } from "react-router";
import { useFormStatus } from "react-dom";
import { mutationGravarProduto } from "./api";
import toast from "react-hot-toast";
import BoxError from "./BoxError";

function Submit({ label }) {
  const { pending } = useFormStatus();
  return (
    <div className="mt-3">
      <button disabled={pending} type="submit">
        {label}
      </button>
    </div>
  );
}

export default function ProdutoUpsert({ allPromise }) {
  const navigate = useNavigate();
  const [doc, categorias] = use(allPromise);
  const gravar = async (formData) => {
    try {
      await mutationGravarProduto(formData);
      navigate("/sucesso");
    } catch (err) {
      toast.error(<BoxError error={err} />);
    }
  };
  return (
    <div>
      <form action={gravar}>
        <div>id</div>
        <div>
          <input
            className="border border-primary"
            name="id"
            type="text"
            defaultValue={doc.id}
            readOnly
          />
        </div>
        <div>descricao</div>
        <div>
          <input name="descricao" type="text" defaultValue={doc.descricao} />
        </div>
        <div>
          <small>valor (separador é o ponto)</small>
        </div>
        <div>
          <input name="valor" type="text" defaultValue={doc.valor} />
        </div>
        <div>categoriaId</div>
        <div>
          <select name="categoriaId" defaultValue={doc.categoriaId}>
            {categorias.map((o) => (
              <option key={o.id} value={o.id}>
                {o.descricao}
              </option>
            ))}
          </select>
        </div>
        <div>isAtalho</div>
        <div>
          <select name="isAtalho" defaultValue={doc.isAtalho}>
            <option value={false}>false</option>
            <option value={true}>true</option>
          </select>
        </div>
        <Submit label={doc.id ? "Atualizar" : "Novo"} />
      </form>
    </div>
  );
}
