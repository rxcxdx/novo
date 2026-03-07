import { nanoid } from 'nanoid'
import { configureStore } from '@reduxjs/toolkit'
import { set, del } from 'object-path-immutable'

const ESTADO_INICIAL = {
  cart: [],
  username: 'zeca'
}

function reducer(state, action) {
  switch (action.type) {
    case 'REMOVER': {
      // action.identifier
      const i = state.cart.findIndex((o) => o.identifier === action.identifier)
      return del(state, ['cart', i])
    }
    case 'UNSHIFT': {
      // action.payload
      if (!action.payload) return state
      const novo = {
        identifier: nanoid(),
        descricao: action.payload.descricao,
        valor: action.payload.valor,
        quantidade: 1,
        obs: ''
      }
      return set(state, 'cart', [novo, ...state.cart])
    }
    case 'SET_QUANTIDADE': {
      // action.identifier
      // action.payload
      const i = state.cart.findIndex((o) => o.identifier === action.identifier)
      return set(state, ['cart', i, 'quantidade'], action.payload)
    }
    case 'CART_CLEAR':
      return set(state, 'cart', [])
    default:
      return state
  }
}

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'production' ? false : true,
  preloadedState: ESTADO_INICIAL
})
