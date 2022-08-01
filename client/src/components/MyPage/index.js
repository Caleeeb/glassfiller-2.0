import React from "react";

function MyPage() {
  return (
    <div>
      <h1>Recipes</h1>
      <section>
        <ul>
          <li>First Recipe</li>
          <li>Second Recipe</li>
          <li>Third Recipe</li>
          <li>
            <a href="/add-recipe" role="button">
              Add Recipe at My Bar
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default MyPage;
