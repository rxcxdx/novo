import { criarDespesa } from "./actions";

export default function CriarDespesa() {
  return (
    <div>
      <div><i>react19</i></div>
        <form action={criarDespesa}>
      <div className="row g-3">
        <div className="col-12">
          <div>descricao</div>
          <input type="text" name="descricao" />
        </div>
        <div className="col-12">
          <div>valor (separador é virgula)</div>
          <input type="number" step={0.01} name="valor" />
        </div>
        <div className="col-12">
          <div>dt</div>
          <input type="date" name="dt" />
        </div>
        <div className="col-12">
          <button type="submit">Criar</button>
        </div>
      </div>
    </form>
    </div>
  
  );
}
