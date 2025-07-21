import { findIndex, isPlainObject } from 'lodash-es'
import { nanoid } from 'nanoid'
import { set, del, update } from 'object-path-immutable'

function buildNovoBean(o) {
  return {
    identifier: nanoid(),
    descricao: o.descricao,
    valor: o.valor,
    quantidade: 1
  }
}

const ESTADO_INICIAL = {
  username: 'bruce',
  cart: []
}

function superReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'MAIS': {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier
      })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => ++v)
    }
    case 'MENOS': {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier
      })
      return update(state, ['cart', cartIndex, 'quantidade'], (v) => --v)
    }
    case 'REMOVER': {
      const cartIndex = findIndex(state.cart, {
        identifier: action.identifier
      })
      return del(state, ['cart', cartIndex])
    }
    case 'ADICIONAR': {
      try {
        if (!isPlainObject(action.payload)) throw Error()
        return set(state, 'cart', [
          buildNovoBean(action.payload),
          ...state.cart
        ])
      } catch {
        window.alert('não adicionou')
        return state
      }
    }
    case 'RESET_CART':
      return set(state, 'cart', [])
    default:
      return state
  }
}

export default superReducer
