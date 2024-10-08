import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contact from '../../components/Contact'
import * as enums from '../../utils/enums/contatos'

const ContactList = () => {
  const defaultContacts = {
    contatos: [
      {
        id: 1,
        nome: 'Cascão',
        email: 'cascao@bol.com.br',
        tel: '123456789',
        categoria: enums.Caterogia.AMIGOS
      },
      {
        id: 1,
        nome: 'Cebolinha',
        email: 'cebola@gmail.com.br',
        tel: '123456789',
        categoria: enums.Caterogia.TRABALHO
      }
    ]
  }

  const { contatos } = useSelector((state: RootReducer) => state.contatos)
  const { termoBusca, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const contatoFiltro = () => {
    let contatosFiltrados = contatos

    if (termoBusca !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) =>
          contato.nome.toLowerCase().search(termoBusca.toLowerCase()) >= 0
      )

      if (criterio === 'todos') {
        return contatos
      } else if (criterio === 'fav') {
        contatosFiltrados = contatosFiltrados.filter((contato) => contato.fav)
      } else {
        contatosFiltrados = contatosFiltrados.filter(
          (contato) => contato.categoria === criterio
        )
      }

      return contatosFiltrados
    } else {
      return contatos
    }
  }

  const totalContatos = contatoFiltro()

  return (
    <>
      <ul>
        {contatoFiltro().map((c) => (
          <li key={c.nome}>
            <Contact
              id={c.id}
              nome={c.nome}
              email={c.email}
              tel={c.telefone}
              categoria={c.categoria}
              fav={c.fav}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactList
