import React from 'react';

function MyBar()  {

    return (
        <header>
        <h1>
        Recipes
        </h1>
        <nav>
            <section>
            <ul>
                <li>
                    First Recipe
                </li>
                <li>
                    Second Recipe
                </li>
                <li>
                    Third Recipe
                </li>
                <li>
                    <a href="/add-recipe" role="button">Add Recipe at My Bar</a>
                    </li>
            </ul>
        </section>

        </nav>
        </header>
    )
}

export default MyBar;