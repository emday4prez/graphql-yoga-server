import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
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

    type Mutation {
      postMessage(user: String!, content: String!): ID!
    }


  `,
  resolvers: {
    Query: {
      messages: () => messages,
    },
    Mutation: {
      postMessage: (parent, { user, content }) => {
        const id = messages.length
        messages.push({
          id,
          user,
          content,
        })

        return id
      },
    },
      
  }
})

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)
 
// Start the server and you're done!
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})