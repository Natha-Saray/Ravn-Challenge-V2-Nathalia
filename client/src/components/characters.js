import React, { Component } from 'react';
// import { gql } from 'apollo-boost';
import { gql, useQuery } from '@apollo/client';
// import { useQuery, gql } from '@apollo/client';
// import { useQuery, ApolloConsumer } from '@apollo/client';
// import gql from 'graphql-tag';
// import { Query } from '@apollo/client';

const CHARACTERS_QUERY = gql`
    query CharactersQuery {
        characters {
            name
            eye_color
            hair_color
            skin_color
            birth_year
        }
    }
`;

export class Characters extends Component {
    render() {
        return (
            <div>
                <h1 className="display-4 my-3">Characters</h1>
            </div>
        )
    }
}

export default Characters