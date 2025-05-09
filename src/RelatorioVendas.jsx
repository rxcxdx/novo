import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { diaAtual } from "./ajuda";
import { fetchRelatorioVendas } from "./api";
import { useError } from "react-use";

const initialValues = {
  gte: diaAtual,
  lte: diaAtual,
};

export default function RelatorioVendas() {
  const dispatchError = useError();
  const [doc, setDoc] = useState({});

  const pesquisar = async (o) => {
    try {
      const data = await fetchRelatorioVendas(o);
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
                  <div>
                    <Field name="gte" type="date" />
                  </div>
                </div>
                <div className="col-auto">
                  <div>
                    <Field name="lte" type="date" />
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



      <div
        style={{
          border: "2px solid green",
          padding: "5px",
          width: "fit-content",
        }}
      >
        <div>qntVendas: {doc.qntVendas}</div>
        <div>itens: {doc.itens}</div>
        <div>total: {doc.total}</div>
        <div>inicio: {doc.inicio}</div>
        <div>fim: {doc.fim}</div>
      </div>
    </div>
  );
}
