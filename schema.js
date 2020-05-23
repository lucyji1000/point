const { buildSchema } = require('graphql');


const schema = buildSchema(`
  type Message {
    id: Int
    author: User
    content: String
    createdAt: String
  }
  type User {
    id: Int
    username: String
    messages: [Message]
  }
  type Query {
    message(id: Int!): Message
    messages: [Message]
    user(id: Int!): User
    users: [User]
  }
  input MessageInput {
    content: String!
    authorId: Int!
  }
  input UserInput {
    username: String!
    email: String!
    password: String!
    phone: String
  }
  type Mutation {
    createUser(input: UserInput!): User
    createMessage(input: MessageInput!): Message
  }
`);

module.exports = schema;
