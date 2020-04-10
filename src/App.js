import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import GlobalStyle from './styles/global';
import Home from 'Home';

const client = new ApolloClient({
  uri: 'https://spotify-graphql-server.herokuapp.com/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Home />
    </ApolloProvider>
  );
}

export default App;
