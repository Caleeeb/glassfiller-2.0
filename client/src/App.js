import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import MyBar from './pages/MyBar';
import Home from './pages/Home.js';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>
    <NavBar></NavBar>
   
    <Routes>
      <Route index element={<Home />} />
      <Route path="MyBar" element={<MyBar />}/>
      <Route path="Login" element={<Login />}/>
    </Routes>

    <Footer></Footer>
    </ApolloProvider>
   </>
  )
}


export default App;
