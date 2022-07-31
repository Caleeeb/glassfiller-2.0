import React from 'react';
import NavBar from './components/NavBar';
// import Login from './components/Login';
// import Signup from './components/Signup';
import RecipeList from './components/RecipeList';
import MyBar from './components/MyBar'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <RecipeList></RecipeList>
        <MyBar></MyBar>
        
      </main>

    </div>
  );
}

export default App;
