import React from 'react';
import { Routes, Route,  } from 'react-router-dom';
import MyBar from './Pages/MyBar';
import Home from './Pages/Home';
// import Login from './Pages/Login';
// // import Layout from './components/Layout';


function App() {
  return (
   <>
   
    <Routes>
    {/* <Route path="/" element={<Layout />}/> */}
    <Route index element={<Home />} />
    <Route path="MyBar" element={<MyBar />}/>
    {/* <Route path="Login" element={<Login />}/> */}
    </Routes>
   
   </>
  )
}

export default App;
