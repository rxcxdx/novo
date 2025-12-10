import check from 'check-types'
import Toastify from 'toastify-js'
import warning from 'warning'
import dayjs from 'dayjs'

const atual = dayjs()

export const diaAtual = atual.format('YYYY-MM-DD')

export const mesAtual = atual.format('YYYY-MM')

export function toastError(v) {
  warning(check.string(v), 'text para toast invalido')
  Toastify({
    style: { background: 'red' },
    text: v,
    duration: 1000,
    position: 'left'
  }).showToast()
}

export function toastSuccess(v) {
  warning(check.string(v), 'text para toast invalido')
  Toastify({
    style: { background: 'green' },
    text: v,
    duration: 1000,
    position: 'left'
  }).showToast()
}

export function toastInfo(v) {
  warning(check.string(v), 'text para toast invalido')
  Toastify({
    text: v,
    duration: 1000,
    position: 'left'
  }).showToast()
}
