const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLList,
    GraphQLSchema 
    } = require('graphql');
    
const axios = require('axios');
    
const InfoType = new GraphQLObjectType({
        name: 'Info',
        fields: () => ({
            name: { type: GraphQLString },
            eye_color: { type: GraphQLString },
            hair_color: { type: GraphQLString },
            skin_color: { type: GraphQLString },
            birth_year: { type: GraphQLString }
        })
    }); 
    

    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            characters: {
                type: new GraphQLList(InfoType),
                resolve(parent, args) { 
                    return axios.get('https://swapi.dev/api/people/')
                    .then(res => res.data);
                }
            }
        }
    });
    
    
    module.exports = new GraphQLSchema({
        query: RootQuery
    });