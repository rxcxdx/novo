import { nanoid } from 'nanoid'
import { produce, enableArrayMethods } from 'immer'
import { configureStore } from '@reduxjs/toolkit'
import remove from "lodash.remove";

enableArrayMethods()

const ESTADO_INICIAL = {
  cart: [],
  userclient: { username: 'zeca', adm: true }
}

function reducer(state, action) {
  switch (action.type) {
    case 'DELETE': {
      // action.type
      // action.identifier
      const nextState = produce(state, (draft) => {
        remove(draft.cart, { identifier: action.identifier })
      })
      return nextState
    }

    case 'UNSHIFT': {
      // action.type
      // action.payload
      if (!action.payload) {
        return state
      }
      const nextState = produce(state, (draft) => {
        draft.cart.unshift({
          identifier: nanoid(),
          descricao: action.payload.descricao,
          valor: action.payload.valor,
          quantidade: 1
        })
      })
      return nextState
    }

    case 'SET_QUANTIDADE': {
      // action.type
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = draft.cart.find((o) => o.identifier === action.identifier )
        j.quantidade = action.payload
      })
      return nextState
    }

    case 'LOGIN': {
      // action.type
      // action.payload
      const nextState = produce(state, (draft) => {
        draft.userclient = action.payload
      })
      return nextState
    }

    case 'LOGOFF': {
      return ESTADO_INICIAL
    }

    case 'SET_VALOR': {
      // action.type
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = draft.cart.find((o) => o.identifier === action.identifier )
        j.valor = action.payload
      })
      return nextState
    }

    case 'CLEAR': {
      const nextState = produce(state, (draft) => {
        draft.cart = []
      })
      return nextState
    }

    default:
      return state
  }
}

export const store = configureStore({
  reducer,
  devTools: false,
  preloadedState: ESTADO_INICIAL
})
