import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from '@apollo/client';
import { Link } from 'react-router-dom';


const CHARACTERS_QUERY = `gql
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
            <div>
                <h1>Character</h1>    
            </div>
        )
    }
}

export default character
