import React from 'react';



    const RecipeList = ({ recipes, title }) => {
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
                            <p>{recipe.definition}</p>
                        </div>
                    ))}
            </div>
            </main>
        )
    }



export default RecipeList;

