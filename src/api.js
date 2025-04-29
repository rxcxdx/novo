import axios from "axios";
import delay from "delay";

axios.defaults.baseURL = "http://localhost:8000/ws";
axios.defaults.timeout = 15000;

export async function fetchProdutos() {
  const response = await axios("/produtos");
  return response.data;
}

export async function fetchLoja() {
  const response = await axios("/loja");
  return response.data;
}

export async function fetchCvendas(previousState, formData) {
  const dto = Object.fromEntries(formData);
  console.log(dto)
  await delay(1000)
  const response = await axios("/c_vendas", { params: dto });
  return response.data;
}

export async function fetchTimeline() {
  const response = await axios("/timeline");
  return response.data;
}

export async function fetchCategorias() {
  const response = await axios("/categorias");
  return response.data;
}

export async function fetchProduto(id) {
  if (!id) return {};
  const response = await axios("/produto/" + id);
  return response.data;
}

export async function fetchRelatorioVendas(v) {
  const response = await axios("/relatorio_vendas", {
    params: { dia: v },
  });
  return response.data;
}

export async function fetchRelatorioBeans(v) {
  const response = await axios("/relatorio_beans", {
    params: { dia: v },
  });
  return response.data;
}

export async function fetchDespesas(v) {
  const response = await axios("/despesas", {
    params: { mes: v },
  });
  return response.data;
}

export async function fetchGraficoDias(v) {
  await delay(1000)
  const response = await axios("/grafico_dias", {
    params: { mes: v },
  });
  return response.data;
}

export async function fetchGraficoHoras(v) {
  await delay(1000)
  const response = await axios("/grafico_horas", {
    params: { dia: v },
  });
  return response.data;
}

export async function fetchIndice(previousState, formData) {
  const dto = {
    gte: formData.get("gte"),
    lte: formData.get("lte"),
  };
  await delay(1000)
  const response = await axios("/indice", { params: dto });
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

export async function mutationGravarProduto(formData) {
  const dto = Object.fromEntries(formData);
  console.log(dto)
  await axios.post("/gravar_produto", dto);
}

export async function mutationApagar(lista) {
  await delay(1000)
  await axios.post("/apagar", lista);
}

export async function mutationBuy(dto) {
  // await delay(2000)
  const response = await axios.post("/buy", dto);
  return response.data;
}
