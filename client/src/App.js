import React from 'react';
// import { ApolloClient } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Characters from './components/characters';
import './App.css';

// const client = new ApolloClient({
//   uri: 'http://localhost:5000/graphql'
// });

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <h1>Ravn Star Wars Registry</h1>
      <Characters />
    </div>
    </ApolloProvider>
    
  );
}


export default App;
