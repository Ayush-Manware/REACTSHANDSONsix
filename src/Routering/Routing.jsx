import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../nabar/Home'
import Student from '../nabar/Student'
import Contact from '../nabar/Contact'
import Navbar from '../nabar/Navbar'

const Routing = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar />
       <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/'} element={<Student />} />
        <Route path={'/contact'} element={<Contact />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default Routing