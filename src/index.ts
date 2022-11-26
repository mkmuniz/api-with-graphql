import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import bootstrap from './server';

bootstrap({ typeDefs, resolvers});