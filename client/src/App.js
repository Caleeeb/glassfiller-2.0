import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MyBar from './Pages/MyBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer'


function App() {
  return (
    <>
    <NavBar></NavBar>
   
    <Routes>
    <Route index element={<Home />} />
    <Route path="MyBar" element={<MyBar />}/>
    <Route path="Login" element={<Login />}/>
    </Routes>
    
    <Footer></Footer>
   </>
  )
}


export default App;
