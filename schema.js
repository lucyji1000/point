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
    email: String
    messages: [Message]
  }
  type Query {
    message(id: Int!): Message
    messages: [Message]
    user(id: Int!): User
    users: [User]
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input MessageInput {
    content: String!
  }
  input SignupInput {
    email: String!
    password: String!
    phone: String
  }
  type AuthToken {
    token: String
  }
  type Mutation {
    createMessage(input: MessageInput!): Message
    login(input: LoginInput!): AuthToken
    logout: String
    signUp(input: SignupInput!): AuthToken
  }
`);

module.exports = schema;
