import React from 'react';



    const RecipeList = ({ recipes, title }) => {
        console.log(recipes)
        if (!recipes.length) {
            return <h3>No Recipes Yet</h3>
        }

        return (
            <main>
            <div>
                <h1>
                    {title}
                </h1>
                {recipes &&
                    recipes.map(recipe => (
                        <div key={recipe._id} className="">
                            <p className=""> {recipe.title} </p>
                            <ul>
                                {recipe.ingredients.map((ingredient, i) => (
                                    <li key={i}>{i + 1}. {ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
            </main>
        )
    }



export default RecipeList;

