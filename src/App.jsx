import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import client from './apollo';
import Routes from './routes';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
