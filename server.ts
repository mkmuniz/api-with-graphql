import express from 'express';
import logger from 'morgan';
const expressGraphQL = require('express-graphql').graphqlHTTP
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();
const port: string | undefined = process.env.PORT;

//I know that this is not the best way to do it, but I'm just trying to get it to work
const books = [
    { title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling', date: '1998' },
    { title: 'Jurassic Park', author: 'Michael Crichton', date: '1990' },
];

const BookType = new GraphQLObjectType({
    name: 'Book',
    description: 'This represents a book written by an author',
    fields: () => ({
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        date: { type: GraphQLString },
    }),
});


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            books: {
                type: new GraphQLList(BookType),
                description: 'List of Books',
                resolve: () => books
            }
        }
    })
});

app.use(express.json());
app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))
app.use(logger('dev'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});