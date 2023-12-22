import React, { useState } from "react"
import RecipeList from "./RecipeList"

function RecipeCreate({recipes, setRecipes}) {
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [photo, setPhoto] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [preparation, setPreparation] = useState("")
  const [action, setAction] = useState(false)
//   RecipeData.push(recipeObject)
//   console.log(RecipeData)
  const handleSubmit = (event) => {
    event.preventDefault()
    setRecipes([...recipes, {name: name, cuisine: cuisine, photo: photo, ingredients: ingredients, preparation: preparation, action: true}])
    console.log(recipes)
    setName("")
    setCuisine("")
    setPhoto("")
    setIngredients("")
    setPreparation("")   
  }
  const handleNameChange = (event) => setName(event.target.value)
  const handleCuisineChange = (e) => setCuisine(e.target.value)
  const handlePhotoChange = (e) => setPhoto(e.target.value)
  const handleIngredientsChange = (e) => setIngredients(e.target.value)
  const handlePreparationChange = (e) => setPreparation(e.target.value)
  return (
    <div>
      <form name="create" onSubmit={handleSubmit}>
        <RecipeList recipe="hi" />
        <table>
          <tbody>
            <tr>
              <td>
                <label className="label" htmlFor="name">
                  <input id="name" type="text" name="name" onChange={handleNameChange} value={name} placeholder="name" required ></input>
                </label>
              </td>
              <td>
                <label className="label" htmlFor="cuisine">
                  <input id="cuisine" type="text" name="cuisine" onChange={handleCuisineChange} value={cuisine} placeholder="cuisine" required ></input>
                </label>
              </td>
              <td>
                <label className="label" htmlFor="photo">
                  <input id="photo" type="url" name="photo" onChange={handlePhotoChange} value={photo} placeholder="photo" required ></input>
                </label>
              </td>
              <td>
                <label className="label" htmlFor="ingredients"></label>
                <textarea id="ingredients" name="ingredients" onChange={handleIngredientsChange} value={ingredients} rows="3" placeholder="ingredients" required></textarea>
              </td>
              <td>
                <label className="label" htmlFor="preparation"></label>
                <textarea id="preparation" name="preparation" onChange={handlePreparationChange} value={preparation} rows="3" placeholder="preparation" required></textarea>
              </td>
              <td>
                <button type="submit">Create</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default RecipeCreate
