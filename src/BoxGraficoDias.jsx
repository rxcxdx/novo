import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { mesAtual } from "./ajuda";
import { useError } from "react-use";
import GraficoDias2 from "./GraficoDias2";
import { fetchGraficoDias } from "./api";

const initialValues = {
  mes: mesAtual,
};

export default function BoxGraficoDias() {
  const dispatchError = useError();
  const [docs, setDocs] = useState([]);
  const pesquisar = async (o) => {
    try {
      const data = await fetchGraficoDias(o);
      setDocs(data);
    } catch (err) {
      dispatchError(err);
    }
  };
  return (
    <div>
      <div>devolve obj</div>
      <div
        className="border border-primary p-2"
        style={{ width: "fit-content" }}
      >
        <Formik initialValues={initialValues} onSubmit={pesquisar}>
          {({ isSubmitting }) => (
            <Form>
              <div className="row gap-1">
                <div className="col-auto">
                  <div>
                    <Field name="mes" type="month" />
                  </div>
                </div>
                <div className="col-auto">
                  <button disabled={isSubmitting} type="submit">
                    Pesquisar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <br />
      <GraficoDias2 payload={docs} />
    </div>
  );
}
