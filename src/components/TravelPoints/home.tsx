import React from 'react';
import MyButton from "../MyButton/myButton";
import MyMap from "../MyMap/myMap";

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

const GET_TRAVEL = gql`
	query {
		travelPoints {
			name,
			id
		}
	}
`;

export default function TravelPoints() {
    return (
        <Query query={GET_TRAVEL}>
                    {({ loading, error, data }: any) => {
                        return(
                        <div>
                           Data
                        </div>)
                    }}
        </Query>
    );
}
