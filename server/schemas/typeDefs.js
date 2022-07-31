const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    recipes: [Recipe]
  }

  type Recipe {
    title: String
    definition: String
    username: String
    ingredients: [String]
  }
  
  type Ingredient {
    name: [String]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    users: [User]
    recipes: [Recipe]
    ingredients: [Ingredient] 
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }



  `;

module.exports = typeDefs;
