import dayjs from './dayjs'

const j = dayjs()

export const MES_ATUAL = j.format('MM/YYYY')
export const DIA_ATUAL = j.format('DD/MM/YYYY')
