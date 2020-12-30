import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from '@apollo/client';
import { Link } from 'react-router-dom';


const CHARACTER_QUERY = `gql
    query CharacterQuery(%name: String!) {
        character(name: $name) {
            name
            eye_color
            hair_color
            skin_color
            birth_year
        } 
    }
`;

export class character extends Component {
    render() {
        return (
            <fragment>
                <Query query={CHARACTER_QUERY}>
                    {({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        const {
                            name,
                            eye_color,
                            hair_color,
                            skin_color,
                            birth_year
                        } = data.character; 

                        return (
                            <div>
                                <h1 className="display-4 my-3">
                                    <span>Name: </span> { name }
                                </h1>
                                <h4>Details</h4>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Eye color: { eye_color }
                                    </li>
                                    <li className="list-group-item">
                                        Hair color:: { hair_color }
                                    </li><li className="list-group-item">
                                        Skin color: { skin_color }
                                    </li>
                                    <li className="list-group-item">
                                        Birth year: { birth_year }
                                    </li>
                                </ul>
                                <hr />
                                <Link to="/" className="btn btn-secondary">Back</Link>
                            </div>
                        );  
                    }}
                </Query>
            </fragment>
        );
    }
}

export default character
