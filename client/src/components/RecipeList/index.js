import React from 'react';

function RecipeList()  {

    return (
        <header>
            <hi>
                Filter
                </hi>
            <nav>
                <ul>
                    <li>
                        First Ingredient
                    </li>
                    <li>
                        Second Ingredient
                    </li>
                    <li>
                        Third Ingredient
                    </li>
                    <li>
                    <a href="/add-ingredient" role="button">Add Ingredient</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default RecipeList;