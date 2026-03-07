import Toastify from 'toastify-js'

export function toastSuccess(text) {
  Toastify({
    text,
    duration: 1000,
    position: 'left',
    style: {
      background: 'green'
    }
  }).showToast()
}

export function toastError(text) {
  Toastify({
    text,
    duration: 1000,
    position: 'left',
    style: {
      background: '#f5a6a4',
      color: 'black'
    }
  }).showToast()
}
