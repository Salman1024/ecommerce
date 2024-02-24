import React from 'react'
import Header from './component/header/Header'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App