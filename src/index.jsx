import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import Main from "./Main";
import isError from "lodash-es/isError";
import get from "lodash-es/get";
import "./configuracao";
import "./perfumaria";

export default function BoxError({ error }) {
  if (!isError(error)) return <div>BoxError não recebeu um erro</div>;
  return (
    <div>
      <div><b>name:</b></div>
      <div><i>{get(error, 'name')}</i></div>      
      <div><b>message:</b></div>
      <div><i>{get(error, 'message')}</i></div>
      <div><b>problema:</b></div>  
      <div><i>{get(error, "response.data.problema")}</i></div>
      <div><b>status:</b></div>
      <div><i>{get(error, "response.status")}</i></div>
    </div>
  );
}

function Protecao({ error, resetErrorBoundary }) {
  return (
    <div className="border border-danger my-3 p-3 text-danger">
      <BoxError error={error} />
      

      <div>
      <button onClick={() => console.log(error)}>ler</button>&nbsp;
        <button onClick={() => resetErrorBoundary()}>reset</button>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <ErrorBoundary FallbackComponent={Protecao}>
      <Main />
    </ErrorBoundary>
  </div>
);
