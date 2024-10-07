import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  tipo: 'editar' | 'deletar' | 'cancelar' | 'salvar' | string
}

export const ContactCard = styled.div`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-bottom: 16px;

  display: flex;
  justify-content: space-between;

  box-shadow: 5px 5px 5px rgb(${variables.secondaryText});

  &:hover {
    box-shadow: 5px 5px 5px 1px rgb(${variables.secondaryText});
  }
`

export const ContactInfo = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const ContactName = styled.h3`
  font-size: 18px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;

  .bi {
    margin-right: 8px;
    color: rgb(${variables.secondaryText});
  }
`

export const ContactEmail = styled.p`
  color: rgb(${variables.secondaryText});
  font-family: 'Nanum Gothic Coding', system-ui;
  margin-top: 8px;

  display: flex;
  align-items: center;
`

export const ContactTelefone = styled.p`
  color: rgb(${variables.secondaryText});
  margin-top: 8px;

  display: flex;
  align-items: center;
`

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContactCategoria = styled.span`
  font-size: 12px;
  background-color: rgb(${variables.tabHover});
  color: #eee;
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border-radius: 8px;

  &::before {
    content: '#';
  }
`

export const ContactActions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 4px;
`

function iconColor(tipo: string) {
  switch (tipo) {
    case 'editar':
      return variables.editIcon
    case 'salvar':
      return variables.saveIcon
    case 'deletar':
      return variables.deleteIcon
    case 'cancelar':
      return variables.cancelIcon
  }
}

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const Icon = styled.div<Props>`
  font-family: 'Bootstrap-icons';
  color: rgb(${variables.secondaryText});
  cursor: pointer;

  &:hover {
    color: rgb(${(props) => iconColor(props.tipo)});
  }
`
