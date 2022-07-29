const { Schema, model } = require("mongoose");

const IngredientSchema = new Schema({
  name: [
    {
      type: String,
      required: "You must enter an ingredient",
    },
  ],
});

const Ingredient = model("Ingredient", IngredientSchema);

module.exports = Ingredient;
