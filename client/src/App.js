import React, { Component } from 'react';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Characters from './components/characters';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
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
