import { nanoid } from 'nanoid'
import { produce, enableArrayMethods } from 'immer'
import { configureStore } from '@reduxjs/toolkit'

enableArrayMethods()

const ESTADO_INICIAL = {
  cart: [],
  userclient: { username: 'zeca', adm: true }
}

function reducer(state, action) {
  switch (action.type) {


    case 'REMOVER': {
      // action.identifier
      const nextState = produce(state, (draft) => {
        const start = draft.cart.findIndex(
          (o) => o.identifier === action.identifier
        )
        draft.cart.splice(start, 1)
      })
      return nextState
    }





    case 'UNSHIFT': {
      // action.payload
      if (!action.payload) {
        return state
      }
      const nextState = produce(state, (draft) => {
        draft.cart.unshift({
          identifier: nanoid(),
          descricao: action.payload.descricao,
          valor: action.payload.valor,
          quantidade: 1,
          obs: ''
        })
      })
      return nextState
    }



    case 'SET_QUANTIDADE': {
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = draft.cart.find((o) => o.identifier === action.identifier)
        j.quantidade = action.payload
      })
      return nextState
    }



    case 'LOGIN': {
      // action.payload
      const nextState = produce(state, (draft) => {
        draft.userclient = action.payload
      })
      return nextState
    }


    case 'LOGOFF': {
      return {
        cart: [],
        userclient: null
      }
    }



    case 'SET_VALOR': {
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = draft.cart.find((o) => o.identifier === action.identifier)
        j.valor = action.payload
      })
      return nextState
    }



    case 'CART_CLEAR': {
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
  devTools: process.env.NODE_ENV === 'production' ? false : true,
  preloadedState: ESTADO_INICIAL
})
