import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle, { Container } from './styles'

import 'bootstrap-icons/font/bootstrap-icons.css'
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
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rota} />
      </Container>
    </Provider>
  )
}

export default App
