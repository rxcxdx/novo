import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { diaAtual } from "./ajuda";
import map from "lodash-es/map";
import { useError } from "react-use";
import { fetchRelatorioBeans } from "./api";

const initialValues = {
  gte: diaAtual,
  lte: diaAtual,
  descricao: "",
};

export default function RelatorioBeans() {
  const dispatchError = useError();
  const [doc, setDoc] = useState({});
  const pesquisar = async (o) => {
    try {
      const data = await fetchRelatorioBeans(o);
      setDoc(data);
    } catch (err) {
      dispatchError(err);
    }
  };
  return (
    <div>
      <div>devolve obj</div>
      <div className="border border-dark p-1">
        <Formik initialValues={initialValues} onSubmit={pesquisar}>
          {({ isSubmitting }) => (
            <Form>
              <div className="row gap-1">
                <div className="col-auto">
                  <div>gte</div>
                  <div>
                    <Field name="gte" type="date" />
                  </div>
                </div>
                <div className="col-auto">
                  <div>lte</div>
                  <div>
                    <Field name="lte" type="date" />
                  </div>
                </div>
                <div className="col-auto">
                  <div>descricao (método includes)</div>
                  <div>
                    <Field name="descricao" type="text" />
                  </div>
                </div>
                <div className="col-12">
                  <button disabled={isSubmitting} type="submit">
                    pesquisar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>inicio: {doc.inicio}</div>
      <div>fim: {doc.fim}</div>
      <div>itens: {doc.itens}</div>
      <div>total: {doc.total}</div>

      <div className="table-responsive">
        <table className="table table-bordered table-sm border-primary w-auto">
          <thead>
            <tr>
            <th>k</th>
              <th>itens</th>
              <th>subtotal</th>
            </tr>
          </thead>
          <tbody>
            {map(doc.relatorio, (o, k) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{o.itens}</td>
                <td>{o.subtotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
