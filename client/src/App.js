// import React, { Component } from 'react';
import { ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <div className="App">
      <h1>Ravn Star Wars Registry</h1>
    </div>
  );
}

export default App;
