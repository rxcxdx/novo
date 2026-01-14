import { nanoid } from 'nanoid'
import { find, isEmpty, remove } from 'lodash-es'
import { produce, enableArrayMethods } from 'immer'

enableArrayMethods()

export function reducer(state, action) {
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
      if (isEmpty(action.payload)) {
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
        const j = find(draft.cart, { identifier: action.identifier })
        j.quantidade = action.payload
      })
      return nextState
    }

    case 'SET_OBS': {
      // action.type
      // action.payload
      const nextState = produce(state, (draft) => {
        draft.obs = action.payload
      })
      return nextState
    }


    case 'SET_VALOR': {
      // action.type
      // action.identifier
      // action.payload
      const nextState = produce(state, (draft) => {
        const j = find(draft.cart, { identifier: action.identifier })
        j.valor = action.payload
      })
      return nextState
    }



    case 'CLEAR': {
      const nextState = produce(state, (draft) => {
        draft.cart = []
        draft.obs = ''
      })
      return nextState
    }

    default:
      return state
  }
}
