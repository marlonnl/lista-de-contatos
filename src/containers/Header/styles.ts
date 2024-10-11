import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'react-router-dom'

export const HeaderStyle = styled.header`
  margin-bottom: 4px;
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
  display: flex;
`

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
`

export const MenuBarItem = styled(Link)`
  display: flex;
  align-items: center;
  background-color: rgb(${variables.buttonBgColor});
  padding: 4px 6px;
  text-decoration: none;
  color: #fff;
  border-radius: 8px;

  margin-left: 8px;

  &:hover {
    background-color: rgba(${variables.buttonBgColor}, 0.9);
  }
`
