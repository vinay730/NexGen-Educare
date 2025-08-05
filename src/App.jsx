import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import CourseGrid from './Components/CourseGrid';
import CourseDetail from './Pages/CourseDetail';
import Courses from './Pages/Courses';

function App() {
  

  return (
    <>     
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage />} />      
      <Route path="/about" element={<About/>} />    
        <Route path="/" element={<CourseGrid />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />  
      <Route path="/courses" element={<Courses/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App
