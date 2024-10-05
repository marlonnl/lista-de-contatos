import styled from 'styled-components'
import variables from '../../styles/variables'

export const HeaderStyle = styled.header`
  background-color: rgb(${variables.bgHeaderColor});
  padding: 16px 16px 0 16px;
`

export const Titulo = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`

export const BuscarInput = styled.input`
  width: 100%;
  border-radius: 8px;
  outline: none;
  padding: 6px 4px;
  color: rgb(${variables.secondaryText});

  font-size: 16px;
  font-weight: bold;
`

export const CampoBusca = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const Tabs = styled.div`
  display: flex;
  align-items: center;
`
