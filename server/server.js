// import modules
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection')

// localhost port
const PORT = process.env.PORT || 3001;
const app = express();

// create a new Apollo server and pass our schema data
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

server.applyMiddleware({ app })

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

db.once('open', () => {
    app.listen(PORT, () =>
        console.log(`Now listening on http://localhost:${PORT}`));
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
});