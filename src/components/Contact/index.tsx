import { BootstrapIcon } from '../../styles'
import {
  ContactCard,
  ContactEmail,
  ContactName,
  ContactTelefone
} from './styles'

type Props = {
  nome: string
  email: string
  tel: string
}

const Contact = ({ nome, email, tel }: Props) => {
  return (
    <ContactCard>
      <ContactName>
        <BootstrapIcon>&#xF4D7;</BootstrapIcon>
        {nome}
      </ContactName>
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
