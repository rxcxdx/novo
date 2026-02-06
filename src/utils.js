const {format: formatYear} = Intl.DateTimeFormat('pt-BR',{year: 'numeric'});
const {format: formatMonth} = Intl.DateTimeFormat('pt-BR',{month: "2-digit"});
const {format: formatDay} = Intl.DateTimeFormat('pt-BR',{day: "2-digit"});

const j = new Date()

const ANO_ATUAL = formatYear(j)
const MES_ATUAL = formatMonth(j)
const DIA_ATUAL = formatDay(j)

export const ISO_MONTH = ANO_ATUAL + '-' + MES_ATUAL
export const ISO_DATE = ANO_ATUAL + '-' + MES_ATUAL + '-' + DIA_ATUAL
