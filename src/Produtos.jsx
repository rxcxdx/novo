import { fetchCategorias } from "./api";
import { Suspense, use } from "react";
import { Formik, Field, Form } from "formik";
// import { LinkProduto } from "./links";

const initialValues = {
  categorias: [],
};

function Conteudo({ categoriasPromise }) {
  const options = use(categoriasPromise);
  return (
    <div>
      <div className="border border-dark p-1 my-3">
        <Formik initialValues={initialValues} onSubmit={(o) => console.log(o)}>
          <Form>
            <div>categorias:</div>
            <div className="row">
            {options.map((o) => (
              <div key={o.id} className="col-auto gap-1">
                <Field name="categorias" type="checkbox" value={o.id} /> {o.descricao}
              </div>
            ))}
            </div>
            <div>
              <button type="submit">pesquisar</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default function Produtos() {
  const categoriasPromise = fetchCategorias();
  return (
    <Suspense fallback={<div>carregando informações...</div>}>
      <Conteudo categoriasPromise={categoriasPromise} />
    </Suspense>
  );
}
