import { Formik, Field, Form } from "formik";
import toast from "react-hot-toast";
import { mutationCriarDespesa } from "./api";
import { useError } from "react-use";

const initialValues = {
  descricao: "",
  valor: 0,
  dt: "",
};

export default function CriarDespesa() {
  const dispatchError = useError();
  const gravar = async (o, { resetForm }) => {
    try {
      await mutationCriarDespesa(o);
      toast.success("sucesso");
      resetForm();
    } catch (err) {
      dispatchError(err);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={gravar}>
      {({ isSubmitting }) => (
        <Form>
          <div className="row gap-3">
            <div className="col-auto">
              <div>descricao</div>
              <div>
                <Field name="descricao" type="text" />
              </div>
            </div>
            <div className="col-auto">
              <div>valor (separador é virgula)</div>
              <div>
                <Field name="valor" type="number" />
              </div>
            </div>
            <div>
              <div>dt</div>
              <div>
                <Field name="dt" type="date" />
              </div>
            </div>
            <div className="col-12">
              <button disabled={isSubmitting} type="submit">
                gravar
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
