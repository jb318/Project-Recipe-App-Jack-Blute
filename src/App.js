import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData)
  const handleDelete = (e, index) => {
    e.preventDefault()
    const removeRecipe = recipes.filter((recipe, i) => i !== index)
    setRecipes(removeRecipe)
  }
  const tunaMango = recipes.map((recipe, index) => (
    <form onSubmit={(e) => handleDelete(e, index)}>
      <div>
        <table>
          <tbody>
            <tr>
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td><img className="img" src={recipe.photo}></img></td>
              <td className>{recipe.ingredients}</td>
              <td>{recipe.preparation}</td>
             <td>
                <button name="delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>   
    </form>  
  ))
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  console.log(recipes)
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <table>
        <thead>
            <tr>
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparation</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
      <RecipeList recipes={recipes} setRecipes={setRecipes}/>  
      <div>{tunaMango}</div>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
      
    </div>
  )
}

export default App
