const { User, Recipe } = require("../models");
const Ingredient = require("../models/Ingredient");

const resolvers = {
  Query: {
    users: async () => {
        return await User.find({})
        .populate('recipes')
    },
    recipes: async () => {
        return await Recipe.find({})
        .populate('ingredient')
    },
    ingredients: async () => {
      return await Ingredient.find({});
    },
  },
};

module.exports = resolvers;