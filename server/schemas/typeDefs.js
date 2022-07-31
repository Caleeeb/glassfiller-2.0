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
  
  type Query {
    users: [User]
    recipes: [Recipe]
    ingredients: [Ingredient]
    
  }

  `;

module.exports = typeDefs;
