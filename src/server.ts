import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function bootstrap({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://localhost:27017').then(() => console.log("Mongodb is running"));

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({ url }) => console.log(`Server listening on ${url}`));
}

export default bootstrap;