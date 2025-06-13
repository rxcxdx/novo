import clean from "clean-deep";
import delay from "delay";
import axios from "axios";

export async function criarDespesa(formData) {
  const o = Object.fromEntries(formData.entries());
  await axios.post("/criar_despesa", o);
}

export async function relatorioVendas(previousState, formData) {
  let dto = Object.fromEntries(formData.entries());
  dto = clean(dto);
  console.log(dto)
  await delay(1000);
  const response = await axios("/relatorio_vendas", {
    params: dto
  });
  return response.data;
}