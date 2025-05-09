import axios from "axios";
import delay from "delay";
import dayjs from "dayjs";

axios.defaults.baseURL = "http://localhost:8000/ws";
axios.defaults.timeout = 15000;

export async function fetchProdutos() {
  const response = await axios("/v1/produtos");
  return response.data;
}

export async function fetchLoja() {
  const response = await axios("/loja");
  return response.data;
}

export async function fetchCvendas(o) {
  await delay(1000);
  const response = await axios.post("/c_vendas", o);
  return response.data;
}

export async function fetchCategorias() {
  const response = await axios("/categorias");
  return response.data;
}

export async function fetchProduto(id) {
  if (!id) return { descricao: "", valor: 0, categoriaId: "", isAtalho: false };
  const response = await axios("/produto/" + id);
  return response.data;
}

export async function fetchIndice(formulario) {
  const dto = {
    gte: dayjs(formulario.gte).startOf("d").format(),
    lte: dayjs(formulario.lte).endOf("d").format(),
  }
  console.log(dto)
  const response = await axios("/indice", {
    params: dto,
  });
  return response.data;
}

export async function fetchRelatorioVendas(formulario) {
  const dto = {
    gte: dayjs(formulario.gte).startOf("d").format(),
    lte: dayjs(formulario.lte).endOf("d").format(),
  };
  const response = await axios.post("/relatorio_vendas", dto);
  return response.data;
}

export async function fetchRelatorioBeans(formulario) {
  const dto = {
    gte: dayjs(formulario.gte).startOf("d").format(),
    lte: dayjs(formulario.lte).endOf("d").format(),
    descricao: formulario.descricao
  };
  console.log(dto)
  const response = await axios.post("/relatorio_beans", dto);
  return response.data;
}

export async function fetchGraficoDias(formulario) {
  await delay(1000);
  const response = await axios("/grafico_dias", {
    params: formulario
  });
  return response.data;
}

export async function fetchVendaSimples(v) {
  await delay(1000);
  const response = await axios("/venda_simples/" + v);
  return response.data;
}

export async function fetchVendaCompleta(v) {
  await delay(2000);
  const response = await axios("/venda_completa/" + v);
  return response.data;
}

export async function mutationGravarProduto(o) {
  console.log(o);
  await delay(1000);
  await axios.post("/gravar_produto", o);
}

export async function mutationApagar(lista) {
  await delay(1000);
  await axios.post("/apagar", lista);
}

export async function mutationBuy(dto) {
  const response = await axios.post("/buy", dto);
  return response.data;
}

export async function mutationCriarDespesa(o) {
  await axios.post("/criarDespesa", o);
}
