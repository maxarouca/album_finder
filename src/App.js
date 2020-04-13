import React, { useState, useEffect } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import GlobalStyle from './styles/global';
import Home from 'Home';
import getApolloClient from 'apollo/client';

function App() {
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApolloClient().then((client) => {
      setClient(client);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Home />
    </ApolloProvider>
  );
}

export default App;
