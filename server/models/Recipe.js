const { Schema, model } = require('mongoose');
const { serializeInteger } = require('whatwg-url');

const recipeSchema = new Schema(
    {
        title: {
            type: String,
            required: 'You need to have a title!',
            minlength: 1,
            maxlength: 280
        },
        definition: {
            type: String,
            required: 'You need to define your cocktail!',
            minlength: 1,
            maxlength: 280
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        ingredient: {
            type: String,
            required: 'You must enter an ingredients',
            minlength: 1,
            maxlength: 280,
            value: {
                type: Integer,
                required: 'You must enter an amount',
            },
            unit: {
                type: String,
                required: 'You need to enter a unit name.',
                minlength: '1',
                maxlength: '25',
            },
        },
    }
);

const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;