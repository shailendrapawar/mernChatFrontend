import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from './Layout.jsx'
import Login from './pages/authPages/Login.jsx'
import Register from './pages/authPages/Register.jsx'
import Home from './pages/homePage/Home.jsx'
import { Provider } from "react-redux"
import myStore from './store/store.js'
const myRouter = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>

    <Route path='' element={<Login />} />
    <Route path='/register' element={<Register />} />

    <Route path='/home' element={<Home />} />

  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={myRouter}>

      </RouterProvider>
    </Provider>
  </StrictMode>,
)
