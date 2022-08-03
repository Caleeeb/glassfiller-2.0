const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipes: [Recipe]
  }

  type Recipe {
    _id: ID
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
      addRecipe(input: RecipeInput): Recipe
    }
    
    input RecipeInput {
      title: String
      definition: String
      username: String
      ingredients: [String]
    }
    
    `;

module.exports = typeDefs;

