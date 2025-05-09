import { use } from "react";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router";
import { useError } from "react-use";
import { mutationGravarProduto } from "./api";

export default function ProdutoUpsert({ allPromise }) {
  const dispatchError = useError();
  const navigate = useNavigate();
  const [doc, categorias] = use(allPromise);
  const gravar = async (o) => {
    try {
      await mutationGravarProduto(o);
      navigate("/sucesso");
    } catch (err) {
      dispatchError(err);
    }
  };
  return (
    <Formik initialValues={doc} onSubmit={gravar}>
      {({ isSubmitting, resetForm }) => (
        <Form>
          <div>id</div>
          <div>
            <Field name="id" type="text" disabled />
          </div>
          <div>descricao</div>
          <div>
            <Field name="descricao" type="text" />
          </div>
          <div>valor (separador é virgular)</div>
          <div>
            <Field name="valor" type="number" />
          </div>
          <div>categoriaId</div>

          <div>
            <Field as="select" name="categoriaId">
              <option disabled value="">
                selecione a categoria
              </option>
              {categorias.map((o, i) => (
                <option key={i} value={o.id}>
                  {o.descricao}
                </option>
              ))}
            </Field>
          </div>
          <div>isAtalho</div>
          <div>
            <Field type="checkbox" name="isAtalho" />
          </div>
          <div>
            <button disabled={isSubmitting} type="submit">
              Gravar
            </button>
            &nbsp;
            <button type="button" onClick={() => resetForm()}>
              reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
