import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

import GlobalStyle, { Container } from './styles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

const rota = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rota} />
      </Container>
    </>
  )
}

export default App
