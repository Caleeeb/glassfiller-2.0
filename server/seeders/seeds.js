const ingredientSeed = require('./ingredientSeed.json');
const db = require('../config/connection');
const Ingredient = require('../models/Ingredient');


db.once('open', async () => {
    try {

      await Ingredient.create(ingredientSeed);
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
});
  