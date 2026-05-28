import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Cards from './components/view/Cards'
import Signup from './components/view/Signup'
import Login from './components/view/Login'
import Forgot from './components/view/Forgot'
import Reset from './components/view/Reset'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forgot' element={<Forgot />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/cards' element={<Cards />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
