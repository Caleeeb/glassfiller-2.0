import React from 'react';

const RecipeList = ({}) => {

    return (
        <header>
            <hi>
                Filter
                </hi>
            <nav>
                <section>
                <ul>
                    <li>
                        First Ingredient
                        <button
                        id="add-ingredient"
                        > + </button>
                    </li>
                    <li>
                        Second Ingredient
                        <button
                        id="add-ingredient"
                        > + </button>
                    </li>
                    <li>
                        Third Ingredient
                        <button
                        id="add-ingredient"
                        > + </button>
                    </li>
                    <li>
                    <a href="add-ingredient" role="button">Add Ingredient</a>
                    </li>
                </ul>
                </section>
            </nav>
        </header>
    )
}


export default RecipeList;