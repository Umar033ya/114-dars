import { useState, useEffect } from 'react'
import Header from './companents/Header/Header.jsx'
import Footer from './companents/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Products from './pages/Products/Products.jsx'
import Profile from './pages/Profile/Profile.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import LayOut from './companents/LayOut/LayOut.jsx'
import Login from './pages/Login/Login.jsx'
import Protect from './companents/ProtectRout/ProtectRout.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut><Home/></LayOut>}></Route>
        <Route path='/about' element={<LayOut><About/></LayOut>}></Route>
        <Route path='/products' element={<LayOut><Products/></LayOut>}></Route>
        <Route path='/profile' element={<Protect><LayOut><Profile/></LayOut></Protect>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
