import styled from 'styled-components'
import variables from '../../styles/variables'

export const ContactCard = styled.div`
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-bottom: 8px;

  &:hover {
    border: 1px solid gray;
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
