import React from "react";

function RecipeList({ recipes, deleteRecipe }) {
  if (!recipes || recipes.length === 0) {
    return <div>No recipes found.</div>;
  }

  return (
    <div className="recipe-list">
      <table>
        <thead>
          {/* ... */}
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.name}>
              {/* ... */}
              <td>
                <button
                  name="delete"
                  onClick={() => deleteRecipe(recipe.name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;