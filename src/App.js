import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import GlobalStyle from './styles/global';

const client = new ApolloClient({
  uri: 'https://spotify-graphql-server.herokuapp.com/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <h1>App</h1>
    </ApolloProvider>
  );
}

export default App;
