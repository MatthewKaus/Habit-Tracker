// import the gql tagged template function
const { gql } = require('apollo-server-express');


// create our type definitions
const typeDefs = gql`

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}
`

// export the type definitions
module.exports = typeDefs;