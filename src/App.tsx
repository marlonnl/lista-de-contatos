import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from './containers/Header'

import GlobalStyle, { Container } from './styles'
import ContactList from './containers/ContactList'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ContactList></ContactList>
      </Container>
    </>
  )
}

export default App
