import { useError } from "react-use";
import { useState } from "react";
import { LinkVenda } from "./links";
import ModalVenda from "./ModalVenda";
import { Formik, Field, Form } from "formik";
import { fetchCvendas } from "./api";
import Copy from "./Copy";

const initialValues = {
  tamanho: 1,
};

export default function Cvendas() {
  const dispatchError = useError();
  const [docs, setDocs] = useState([]);
  const pesquisar = async (o) => {
    try {
      const data = await fetchCvendas(o);
      setDocs(data);
    } catch (err) {
      dispatchError(err);
    }
  };
  const linhas = docs.map((o) => (
    <tr key={o._id}>
      <td>
        <ModalVenda vendaId={o._id} />
      </td>
      <td>
        <LinkVenda vendaId={o._id} />
      </td>
      <td>{o.obs}</td>
      <td>
        <Copy value={o._id} />
      </td>
    </tr>
  ));
  return (
    <div>
      <div className="border border-dark p-1">
        <Formik initialValues={initialValues} onSubmit={pesquisar}>
          {({ isSubmitting, resetForm }) => (
            <Form>
              <div>tamanho (cart)</div>
              <div className="mb-3">
                <Field name="tamanho" type="number" style={{ width: '6rem'}} />
              </div>
              <div>
                <button disabled={isSubmitting} type="submit">
                  pesquisar
                </button>
                &nbsp;
                <button type="button" onClick={() => resetForm()}>reset</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>Limite é 8</div>
      <div>Linhas: {docs.length}</div>
      <div className="table-responsive">
      <table className="table table-bordered table-sm border-primary w-auto">
          <thead>
            <tr>
              <th>modal</th>
              <th>_id</th>
              <th>obs</th>
              <th>copiar</th>
            </tr>
          </thead>
          <tbody>{linhas}</tbody>
        </table>
      </div>
    </div>
  );
}
