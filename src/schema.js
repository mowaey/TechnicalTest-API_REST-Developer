import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

// Construct a schema, using GraphQL schema language
const typeDefs = `
    type Query {
        getDuties: [Duty]
        getDuty(_id: ID!): Duty
    }
    type Duty {
        _id: ID
        name: String!
    }
    type Mutation {
        createDuty(input: DutyInput): Duty
        updateDuty(_id: ID, input: DutyInput): Duty
        deleteDuty(_id: ID): Duty
    }
    input DutyInput {
        name: String!
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});