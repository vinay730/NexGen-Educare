import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Courses from './Pages/Courses';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
