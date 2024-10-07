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

  return (
    <>
      <ul>
        <li>
          <Contact
            nome={'Cebolinha da Silva Correa'}
            email={'cebola@gmail.com'}
            tel={'124678345'}
            categoria={enums.Caterogia.AMIGOS}
            fav={false}
          />
        </li>
        <li>
          <Contact
            nome={'Cebolinha da Silva Correa'}
            email={'cebola@gmail.com'}
            tel={'124678345'}
            categoria={enums.Caterogia.FAMILIA}
            fav={true}
          />
        </li>
      </ul>
    </>
  )
}

export default ContactList
