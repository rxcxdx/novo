import { configureStore } from '@reduxjs/toolkit'
import superReducer from './superReducer'

export default configureStore({
  reducer: superReducer,
  devTools: true
})
