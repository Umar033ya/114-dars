import { useState, useEffect } from 'react'
import Header from './companents/Header/Header.jsx'
import Footer from './companents/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Products from './pages/Products/Products.jsx'
import Profile from './pages/Profile/Profile.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
