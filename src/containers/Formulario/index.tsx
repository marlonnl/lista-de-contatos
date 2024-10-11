import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { adiciona } from '../../store/reducers/contatos'

import * as enums from '../../utils/enums/contatos'
import * as LS from './styles'
import { BootstrapIcon } from '../../styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [novoNome, setNovoNome] = useState('')
  const [novoEmail, setNovoEmail] = useState('')
  const [novoTel, setNovoTel] = useState('')
  const [novaCategoria, setNovaCategoria] = useState(enums.Caterogia.AMIGOS)
  const [novoFav, setNovoFav] = useState(false)

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adiciona({
        nome: novoNome,
        email: novoEmail,
        telefone: novoTel,
        categoria: novaCategoria,
        fav: novoFav
      })
    )
    navigate('/')
  }

  return (
    <>
      <LS.FormTitle>Adicionar novo contato</LS.FormTitle>
      <LS.FormStyle onSubmit={adicionarContato}>
        <LS.FormGroup>
          <label>
            <BootstrapIcon>&#xF4D7;</BootstrapIcon>
          </label>
          <LS.Campo
            type="text"
            placeholder="Nome completo"
            value={novoNome}
            onChange={(e) => setNovoNome(e.target.value)}
            required
          />
        </LS.FormGroup>

        <LS.FormGroup>
          <label>
            <BootstrapIcon>&#xF32F;</BootstrapIcon>
          </label>
          <LS.Campo
            type="email"
            placeholder="E-mail"
            value={novoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
            required
          />
        </LS.FormGroup>

        <LS.FormGroup>
          <label>
            <BootstrapIcon>&#xF5B4;</BootstrapIcon>
          </label>
          <LS.Campo
            type="tel"
            placeholder="Telefone"
            value={novoTel}
            onChange={(e) => setNovoTel(e.target.value)}
            required
          />
        </LS.FormGroup>

        <LS.RadioList>
          {Object.values(enums.Caterogia).map((categoria) => (
            <LS.Opcao key={categoria}>
              <input
                type="radio"
                name="categoria"
                value={categoria}
                id={categoria}
                defaultChecked={categoria === enums.Caterogia.AMIGOS}
                onChange={(e) =>
                  setNovaCategoria(e.target.value as enums.Caterogia)
                }
              />
              <label htmlFor={categoria}>{categoria}</label>
            </LS.Opcao>
          ))}
        </LS.RadioList>

        <LS.RadioList>
          <LS.Opcao>
            <input
              type="checkbox"
              id="favorito"
              defaultChecked={novoFav}
              onChange={(e) => setNovoFav(e.target.checked)}
            />
            <label htmlFor="favorito">favorito</label>
          </LS.Opcao>
        </LS.RadioList>

        <LS.Botao type="submit">Cadastrar</LS.Botao>
      </LS.FormStyle>
    </>
  )
}

export default Formulario
