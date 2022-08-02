import React from 'react';
import './App.scss';
import { Router, Routes, Route } from 'react-router-dom';
import MyBar from './pages/MyBar';
import Home from './pages/Home.js';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
  <div>
    <h1>Hello</h1>
    <Router>
    {/* <NavBar /> */}
   
    <Routes>
      {/* <Route path="/mybar" element={<MyBar />}/>
      <Route path="/login" element={<Login />}/> */}
      <Route path="/" element={<Home />} />
    </Routes>
    
    <Footer />
    </Router>
    </div>
  )
}






export default App;
