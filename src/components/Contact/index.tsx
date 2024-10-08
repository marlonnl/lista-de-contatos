import { useDispatch } from 'react-redux'
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
import { remove } from '../../store/reducers/contatos'

type Props = {
  nome: string
  email: string
  tel: string
  categoria: enums.Caterogia
  fav: boolean
  id: number
}

const Contact = ({ nome, email, tel, categoria, fav, id }: Props) => {
  const dispatch = useDispatch()

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
        <Favorito
          fav={fav}
          title={fav ? 'Remover dos favoritos' : 'Favoritar contato'}
        >
          {fav ? <>&#xF586;</> : <>&#xF588;</>}
        </Favorito>
        <Icons>
          <Icon tipo={'editar'} title={'Editar contato'}>
            &#xF4CA;
          </Icon>
          <Icon
            tipo={'deletar'}
            title={'Deletar contato'}
            onClick={() => dispatch(remove(id))}
          >
            &#xF5DD;
          </Icon>
          {/* <Icon tipo={'cancelar'} title={'Cancelar edição'}>&#xF622;</Icon>
          <Icon tipo={'salvar'} title={'Salvar edição'}>&#xF7D9;</Icon> */}
        </Icons>
      </ContactActions>
    </ContactCard>
  )
}

export default Contact
