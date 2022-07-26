import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `;

export const ADD_RECIPE = gql`
  mutation addRecipe($title: String!, $definition: String!, $username: String!, $ingredients: String!) {
    addRecipe(title: $title, definition: $definition, username: $username, ingredients: $ingredients){
    title
    definition
    username
    ingredients
    }
  }
  `
