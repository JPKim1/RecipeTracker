import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialRecipe = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [recipe, setRecipe] = useState(initialRecipe);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe(recipe);
    setRecipe(initialRecipe);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">Name:</label>
            </td>
            <td>
              <input
                type="text"
                id="name"
                name="name"
                value={recipe.name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="cuisine">Cuisine:</label>
            </td>
            <td>
              <input
                type="text"
                id="cuisine"
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="photo">Photo URL:</label>
            </td>
            <td>
              <input
                type="text"
                id="photo"
                name="photo"
                value={recipe.photo}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="ingredients">Ingredients:</label>
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="preparation">Preparation Instructions:</label>
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                value={recipe.preparation}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;