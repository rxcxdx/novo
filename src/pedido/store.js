import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './reducer'

const ESTADO_INICIAL = {
  cart: [],
  obs: '',
  username: 'ze',
}

export const store = configureStore({
  reducer,
  devTools: true,
  preloadedState: ESTADO_INICIAL
})
