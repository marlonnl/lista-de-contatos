import styled, { createGlobalStyle } from 'styled-components'
import variables from './variables'

const GlobalStyle = createGlobalStyle`
    /* css reset */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Roboto', sans-serif;
    }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 800px;
  background-color: rgb(${variables.bgHeaderColor});
  padding: 16px;
`

export const FonteNumerica = styled.p`
  font-family: 'Nanum Gothic Coding', monospace;
`

export const BootstrapIcon = styled.div`
  font-family: 'Bootstrap-icons';
  margin-right: 8px;
`

export default GlobalStyle
