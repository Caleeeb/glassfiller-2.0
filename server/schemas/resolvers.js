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
                .populate('ingredients')
        },
        ingredients: async () => {
            return await Ingredient.find({});
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
    }
};



module.exports = resolvers;