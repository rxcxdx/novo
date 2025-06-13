import axios from "axios";
import delay from "delay";
import clean from "clean-deep";

export async function fetchIndice(o) {
  const dto = clean(o, { cleanValues: [false, NaN] });
  await delay(1000);
  const response = await axios("/indice", {
    params: dto,
  });
  return response.data;
}

export async function fetchProdutos() {
  const response = await axios("/produtos");
  return response.data;
}

export async function fetchRelatorioBeans(o) {
  const dto = clean(o);
  console.log(dto);
  await delay(1000);
  const response = await axios("/relatorio_beans", {
    params: dto,
  });
  return response.data;
}

export async function fetchGrafico(o) {
  await delay(1000);
  const response = await axios("/grafico", { params: o });
  return response.data;
}