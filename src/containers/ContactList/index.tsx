import Contact from '../../components/Contact'
import { ContactListStyle } from './styles'
import * as categorias from '../../utils/enums/contatos'

const ContactList = () => {
  const defaultContacts = {
    contatos: [
      {
        id: 1,
        nome: 'Cascão',
        email: 'cascao@bol.com.br',
        tel: '123456789',
        categoria: categorias.Caterogia.AMIGOS
      },
      {
        id: 1,
        nome: 'Cebolinha',
        email: 'cebola@gmail.com.br',
        tel: '123456789',
        categoria: categorias.Caterogia.TRABALHO
      }
    ]
  }

  return (
    <>
      <ul>
        <li>
          <Contact
            nome={'Cebolinha da Silva Correa'}
            email={'cebola@gmail.com'}
            tel={'124678345'}
          />
        </li>
        <li>
          <Contact
            nome={'Cebolinha da Silva Correa'}
            email={'cebola@gmail.com'}
            tel={'124678345'}
          />
        </li>
      </ul>
    </>
  )
}

export default ContactList
