import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from '@apollo/client';
import characterItem from './characterItem';

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
            <Fragment>
                <h1 className="display-4 my-3">Characters</h1>
                <Query query={CHARACTERS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        return (
                            <Fragment>
                                {data.characters.map(character => (
                                    <characterItem key={character.name} character={character} />
                                ))}
                            </Fragment>
                        );
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default Characters
