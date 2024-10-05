import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './containers/Header'

import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
    </>
  )
}

export default App
