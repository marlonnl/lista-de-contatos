import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/contatos'

type FiltroState = {
  termoBusca?: string
  criterio: string
}

const initialState: FiltroState = {
  termoBusca: '',
  criterio: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termoBusca = action.payload
    },
    alteraFiltro: (state, action: PayloadAction<string>) => {
      state.criterio = action.payload
    }
  }
})

export const { alteraTermo, alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
