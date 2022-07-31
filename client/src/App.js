import React from 'react';
import { Routes, Route } from 'react-router-dom'
import MyBar from './Pages/MyBar'
import Home from './Pages/Home'
import Login from './Pages/Login'


function App() {
  return (
   <>
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/Mybar" element={<MyBar />}/>
    <Route path="/Login" element={<Login />}/>
    </Routes>
   </>
  );
}

export default App;
