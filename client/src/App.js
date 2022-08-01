import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MyBar from './pages/MyBar';
import Home from './pages/Home.js';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
  <div>
    <NavBar />
   
    <Routes>
      <Route index element={<Home />} />
      <Route path="MyBar" element={<MyBar />}/>
      <Route path="Login" element={<Login />}/>
    </Routes>
    
    <Footer />
    </div>
  )
}


export default App;
