import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import BoxError from "./BoxError";
import Main from "./Main";
import "./configuracao";
import "./perfumaria";

function Protecao({ error, resetErrorBoundary }) {
  return (
    <div className="border border-danger my-3 p-3 text-danger">
      <h1>Erro fatal no programa componente Protecao</h1>
      <BoxError error={error} />
      <div>
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
