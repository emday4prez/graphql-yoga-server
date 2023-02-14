import { createSchema } from 'graphql-yoga'

const messages = []




export const schema = createSchema({
  
  typeDefs: /* GraphQL */ `
type Message {
      id: ID!
      user: String!
      content: String!
    }

    type Query {
      messages: [Message!]
    }


  `,
  resolvers: {
    Query: {
      messages: () => messages,
    }
  }
})