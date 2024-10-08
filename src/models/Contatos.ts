import * as enums from '../utils/enums/contatos'

class Contato {
  id: number
  nome: string
  email: string
  telefone: string
  categoria: enums.Caterogia
  fav: boolean

  constructor(
    id: number,
    nome: string,
    email: string,
    telefone: string,
    categoria: enums.Caterogia
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.categoria = categoria
    this.fav = false
  }
}

export default Contato
