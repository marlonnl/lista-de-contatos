import { BootstrapIcon, Favorito } from '../../styles'
import * as enums from '../../utils/enums/contatos'
import {
  ContactActions,
  ContactCard,
  ContactCategoria,
  ContactEmail,
  ContactHeader,
  ContactInfo,
  ContactName,
  ContactTelefone,
  Icon,
  Icons
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
      <ContactInfo>
        <ContactHeader>
          <ContactName>
            <BootstrapIcon>&#xF4D7;</BootstrapIcon>
            {nome}
          </ContactName>
          <ContactCategoria>{categoria}</ContactCategoria>
        </ContactHeader>
        <ContactEmail>
          <BootstrapIcon>&#xF84C;</BootstrapIcon>
          {email}
        </ContactEmail>
        <ContactTelefone>
          <BootstrapIcon>&#xF5C1;</BootstrapIcon>
          {tel}
        </ContactTelefone>
      </ContactInfo>

      <ContactActions>
        <Favorito fav={fav}>{fav ? <>&#xF586;</> : <>&#xF588;</>}</Favorito>
        <Icons>
          <Icon tipo={'editar'}>&#xF4CA;</Icon>
          <Icon tipo={'deletar'}>&#xF5DD;</Icon>
          {/* <Icon tipo={'cancelar'}>&#xF622;</Icon>
          <Icon tipo={'salvar'}>&#xF7D9;</Icon> */}
        </Icons>
      </ContactActions>
    </ContactCard>
  )
}

export default Contact
