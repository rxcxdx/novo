import axios from "axios";
import delay from "delay";
import clean from 'clean-deep'

axios.defaults.baseURL = "http://localhost:8000/ws";
axios.defaults.timeout = 15000;

export async function fetchProdutos() {
  const response = await axios("/v1/produtos");
  return response.data;
}

export async function fetchUserclients() {
  const response = await axios("/userclients");
  return response.data;
}

export async function fetchLoja() {
  const response = await axios("/loja");
  return response.data;
}

export async function fetchCvendas(previousState, formData) {
  const dto = { tamanho: formData.get("tamanho") }
  await delay(1000);
  const response = await axios("/c_vendas", {
    params: clean(dto)
  });
  return response.data;
}

export async function fetchCategorias() {
  const response = await axios("/categorias");
  return response.data;
}

export async function fetchProduto(id) {
    await delay(1000);
    const response = await axios("/produto/" + id);
    return response.data;
}




export async function fetchUserclient(id) {
  await delay(1000);
  const response = await axios("/userclient/" + id);
  return response.data;
}



export async function fetchIndice(previousState, formData) {
  const dto = { gte: formData.get("gte"), lte: formData.get("lte") }
  await delay(1000);
  const response = await axios("/indice", {
    params: dto,
  });
  return response.data;
}

export async function fetchRelatorioVendas(previousState, formData) {
  const dto = { gte: formData.get("gte"), lte: formData.get("lte") }
  await delay(1000);
  const response = await axios("/relatorio_vendas", {
    params: dto,
  });
  return response.data;
}

export async function fetchRelatorioBeans(previousState, formData) {
  const dto = { gte: formData.get("gte"), lte: formData.get("lte") }
  await delay(1000);
  const response = await axios("/relatorio_beans", {
    params: dto,
  });
  return response.data;
}

export async function fetchGraficoMes(previousState, formData) {
  await delay(1000);
  const response = await axios("/grafico_mes/" + formData.get('mes'));
  return response.data;
}

export async function fetchVendaSimples(v) {
  await delay(1000);
  const response = await axios("/venda_simples/" + v);
  return response.data;
}

export async function fetchVendaCompleta(v) {
  await delay(1000);
  const response = await axios("/venda_completa/" + v);
  return response.data;
}

export async function mutationAtualizarProduto(o) {
  console.log(o)
  await delay(1000);
  await axios.post("/atualizar_produto", o);
}

export async function mutationAtualizarUserclient(o) {
  console.log(o)
  await delay(1000);
  await axios.post("/atualizar_userclient", o);
}

export async function mutationBuy(dto) {
  const response = await axios.post("/buy", dto);
  return response.data;
}

export async function mutationCriarDespesa(o) {
  console.log(o)

  await delay(1000)
  await axios.post("/criar_despesa", o);
}
