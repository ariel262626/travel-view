import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
})

// Pass your GraphQL endpoint to uri
const client: any = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
