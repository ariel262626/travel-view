import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import MyButton from "../MyButton/myButton";
import MyMap from "../MyMap/myMap";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import TravelPoints from "../TravelPoints/home";

const useStyles = makeStyles({
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
    },
});

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

export default function Home() {
    const classes = useStyles();
    return (
        <div className="home">
            <ApolloProvider client={client}>
              <TravelPoints/>
            </ApolloProvider>
        <span className={classes.button}>
            <MyButton size={'small'} text={'Add place'}/>
        </span>
            <MyMap/>
        </div>
    );
}
