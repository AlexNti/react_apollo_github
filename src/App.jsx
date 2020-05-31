import React from 'react';

import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';

import client from './apollo';
import Routes from './routes';
import GlobalStyles from './utils/GlobalStyles';

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  );
}

export default App;
