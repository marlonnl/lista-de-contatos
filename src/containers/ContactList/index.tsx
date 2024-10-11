import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contact from '../../components/Contact'
import { ContactSection } from './styles'

const ContactList = () => {
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

  return (
    <>
      <ContactSection>
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
      </ContactSection>
    </>
  )
}

export default ContactList
