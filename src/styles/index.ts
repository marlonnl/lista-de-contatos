import styled, { createGlobalStyle } from 'styled-components'

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
`

export const FonteNumerica = styled.p`
  font-family: 'Nanum Gothic Coding', monospace;
`

export default GlobalStyle
