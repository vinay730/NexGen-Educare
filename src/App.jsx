import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage';

function App() {
  

  return (
    <>     
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />      
    </Routes>

    <Footer/>
    </>
  )
}

export default App
