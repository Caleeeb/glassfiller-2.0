const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipes: [Recipe]
  }

  type Recipe {
    title: String
    definition: String
    user_id: User
    ingredient: [String]
    value: [Int]
    unit: [String]
  }

  type Query {
    user: [User]
    recipe: [Recipe]
  }

  type Mutation {

  }

`