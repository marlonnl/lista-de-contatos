import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'
import * as enums from '../../utils/enums/contatos'

type ContatoState = {
  contatos: Contato[]
}

const initialState: ContatoState = {
  contatos: [
    {
      id: 1,
      nome: 'Cebola',
      email: 'cebolinha@cebola.com.br',
      telefone: '834797835278352',
      categoria: enums.Caterogia.AMIGOS,
      fav: false
    },
    {
      id: 2,
      nome: 'Casco',
      email: 'cascao@cebola.com.br',
      telefone: '3233',
      categoria: enums.Caterogia.FAMILIA,
      fav: false
    },
    {
      id: 3,
      nome: 'Magali',
      email: 'melancia@bol.com.br',
      telefone: '000000',
      categoria: enums.Caterogia.TRABALHO,
      fav: false
    },
    {
      id: 4,
      nome: 'Monica Dentuça',
      email: 'monic@monica.com.br',
      telefone: '7543',
      categoria: enums.Caterogia.AMIGOS,
      fav: true
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.contatos = [
        ...state.contatos.filter((contato) => contato.id !== action.payload)
      ]
    },
    alteraFav: (state, action: PayloadAction<number>) => {
      const contatoIndex = state.contatos.findIndex(
        (i) => i.id === action.payload
      )

      if (contatoIndex >= 0) {
        const estadoAtual = state.contatos[contatoIndex].fav
        state.contatos[contatoIndex].fav = !estadoAtual
      }
    }
  }
})

export const { remove, alteraFav } = contatoSlice.actions
export default contatoSlice.reducer
