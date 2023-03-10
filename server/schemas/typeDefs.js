const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
    password: String
    profile: Profile
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    profile(username: String): [Profile]
  }

type Profile {
    _id: ID
    first_name: String
    last_name: String
    bio: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addProfile(name: String!): Profile
    removeProfile(profileId: ID!): Profile
    
  }
`;

module.exports = typeDefs;
