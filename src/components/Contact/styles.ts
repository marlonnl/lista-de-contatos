import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactCard = styled.div`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-bottom: 16px;

  box-shadow: 5px 5px 5px rgb(${variables.secondaryText});

  &:hover {
    box-shadow: 5px 5px 5px 1px rgb(${variables.secondaryText});
  }
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

export const ContactIcons = styled.div`
  display: flex;
  gap: 16px;
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
