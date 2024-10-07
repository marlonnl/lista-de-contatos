import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variables from '../../styles/variables'

export const BackButtonStyle = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;

  padding: 4px 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  color: #fff;
  background-color: rgb(${variables.buttonBgColor});

  &:hover {
    background-color: rgba(${variables.buttonBgColor}, 0.9);
  }
`
