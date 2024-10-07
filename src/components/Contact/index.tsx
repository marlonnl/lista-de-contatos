import { BootstrapIcon, Favorito } from '../../styles'
import * as enums from '../../utils/enums/contatos'
import {
  ContactCard,
  ContactCategoria,
  ContactEmail,
  ContactHeader,
  ContactIcons,
  ContactName,
  ContactTelefone
} from './styles'

type Props = {
  nome: string
  email: string
  tel: string
  categoria: enums.Caterogia
  fav: boolean
}

const Contact = ({ nome, email, tel, categoria, fav }: Props) => {
  return (
    <ContactCard>
      <ContactHeader>
        <ContactName>
          <BootstrapIcon>&#xF4D7;</BootstrapIcon>
          {nome}
        </ContactName>
        <ContactIcons>
          <ContactCategoria>{categoria}</ContactCategoria>
          <Favorito fav={fav}>{fav ? <>&#xF586;</> : <>&#xF588;</>}</Favorito>
        </ContactIcons>
      </ContactHeader>
      <ContactEmail>
        <BootstrapIcon>&#xF84C;</BootstrapIcon>
        {email}
      </ContactEmail>
      <ContactTelefone>
        <BootstrapIcon>&#xF5C1;</BootstrapIcon>
        {tel}
      </ContactTelefone>
    </ContactCard>
  )
}

export default Contact
