import React, { useState } from "react";

const RecipeList = ({ recipes, title }) => {
  const [show, setShow] = useState(true);

  return (
    <main>
      <div>
        <h1>{title}</h1>
        {recipes &&
          recipes.map((recipe) => (
            <div key={recipe._id} className="">
              <p className=""> {recipe.title} </p>
              <p>{recipe.definition}</p>

              {show ? (
                <div>
                  <p className="">Recipe Submitted by: {recipe.username} </p>
                  <ul>
                    {recipe.ingredients.map((ingredient, i) => (
                      <li> {ingredient}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <button key={recipe._id} onClick={() => setShow(!show)}>
                Toggle
              </button>
            </div>
          ))}
      </div>
    </main>
  );
};


export default RecipeList;
