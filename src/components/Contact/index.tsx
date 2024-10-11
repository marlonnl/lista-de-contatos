import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { alteraFav, edita, remove } from '../../store/reducers/contatos'

import { BootstrapIcon, Favorito } from '../../styles'
import {
  ContactActions,
  ContactCard,
  ContactCategoria,
  ContactEmail,
  ContactHeader,
  ContactInfo,
  ContactName,
  ContactTelefone,
  EmailInput,
  Icon,
  Icons
} from './styles'
import Contato from '../../models/Contatos'

type Props = Contato

const Contact = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal,
  categoria,
  fav,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal.length > 0) {
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelaEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  function salvaEdicao() {
    dispatch(
      edita({
        nome,
        email,
        telefone,
        categoria,
        id,
        fav
      })
    )
    setEstaEditando(false)
  }

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
          <EmailInput
            // type="email"
            value={email}
            disabled={!estaEditando}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ContactEmail>
        <ContactTelefone>
          <BootstrapIcon>&#xF5C1;</BootstrapIcon>
          <input
            type="tel"
            value={telefone}
            disabled={!estaEditando}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </ContactTelefone>
      </ContactInfo>

      <ContactActions>
        <Favorito
          fav={fav}
          title={fav ? 'Remover dos favoritos' : 'Favoritar contato'}
          onClick={() => dispatch(alteraFav(id))}
        >
          {fav ? <>&#xF586;</> : <>&#xF588;</>}
        </Favorito>
        <Icons>
          {estaEditando ? (
            <>
              <Icon
                tipo={'cancelar'}
                title={'Cancelar edição'}
                onClick={() => cancelaEdicao()}
              >
                &#xF622;
              </Icon>
              <Icon
                tipo={'salvar'}
                title={'Salvar edição'}
                onClick={salvaEdicao}
              >
                &#xF7D9;
              </Icon>
            </>
          ) : (
            <>
              <Icon
                tipo={'editar'}
                title={'Editar contato'}
                onClick={() => setEstaEditando(true)}
              >
                &#xF4CA;
              </Icon>
              <Icon
                tipo={'deletar'}
                title={'Deletar contato'}
                onClick={() => dispatch(remove(id))}
              >
                &#xF5DD;
              </Icon>
            </>
          )}
        </Icons>
      </ContactActions>
    </ContactCard>
  )
}

export default Contact
