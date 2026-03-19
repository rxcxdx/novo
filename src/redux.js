import { nanoid } from 'nanoid'
import { configureStore } from '@reduxjs/toolkit'
import { del, merge } from 'object-path-immutable'
import { createAction } from '@reduxjs/toolkit'
import { findIndex } from 'lodash-es'

const ESTADO_INICIAL = {
  cart: [],
  obs: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'REMOVER_ITEM': {
      const i = findIndex(state.cart, { identifier: action.payload })
      return del(state, ['cart', i])
    }
    case 'UNSHIFT': {
      return { ...state, cart: [action.payload, ...state.cart] }
    }
    case 'EDITAR_ITEM': {
      const i = findIndex(state.cart, { identifier: action.payload.identifier })
      return merge(state, ['cart', i], action.payload)
    }
    case 'SET_OBS': {
      return { ...state, obs: action.payload }
    }
    case 'CLEAR': {
      return { ...state, cart: [], obs: '' }
    }
    default: {
      return state
    }
  }
}

export const unshiftAction = createAction('UNSHIFT', (o) => {
  return {
    payload: {
      identifier: nanoid(),
      quantidade: 1,
      obs: '',
      ...o
    }
  }
})

export const removerItemAction = createAction('REMOVER_ITEM')

export const editarItemAction = createAction('EDITAR_ITEM')

export const clearAction = createAction('CLEAR')

export const setObsAction = createAction('SET_OBS')

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'production' ? false : true,
  preloadedState: ESTADO_INICIAL
})
