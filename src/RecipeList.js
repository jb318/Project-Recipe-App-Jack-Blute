import React from "react"

function RecipeList({recipe, recipes, setRecipes}) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const handleDelete = (event) => {
    event.preventDefault()
    event.target.innerHTML = ""
  }
  if (1 === 2) {
    recipe.action = false
    return (
      <div className="recipe-list">
        <form onSubmit={handleDelete}>
          <table>
            <tbody>
              <tr>
                <td>{recipe.name}</td>
                <td>{recipe.cuisine}</td>
                <td><img className="img" src={recipe.photo} /></td>
                <td>{recipe.ingredients}</td>
                <td>{recipe.preparation}</td>
                <td>
                  <button name="delete">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>      
    )
  }
  return null
}

export default RecipeList
