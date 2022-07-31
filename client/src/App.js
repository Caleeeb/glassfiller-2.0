import React from 'react';
import { Routes, Route } from 'react-router-dom'
// import Login from './components/Login';
// import Signup from './components/Signup';
import RecipeList from './components/RecipeList';
import MyBar from './components/MyBar'
import Layout from './components/Layout'


// function App() {
//   return (
//     <div>
//       <NavBar></NavBar>
//       <main>
//         <RecipeList></RecipeList>
//         <MyBar></MyBar>
        
//       </main>

//     </div>
//   );
// }

function App() {
  return (
   <>
    <Routes>
    <Route path="/" element={<Layout />}/>
    <Route path="/myBar" element={<MyBar />}/>
    </Routes>
   </>
  );
}

export default App;
