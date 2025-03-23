import React from "react";
import RecipeSection from "./RecipeSection.jsx";

export default function MainContent() {

  const [ingredients, setIngredients] = React.useState([]);
  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

  const [recipeShown, setRecipeShown] = React.useState(false);

  /*approach with onSubmit

    function handleSubmit(event){
      event.preventDefault();
      const formData = event.currentTarget;
      const newIngredient = new FormData('ingredient') // using the name of the input
    }

    the approch below with action={}, gets the data from the form under the hood.
  */

  function addIngredient(formData){
    const newIngredient = formData.get('ingredient');
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown(){
    setRecipeShown(prevRecipeShown => !prevRecipeShown);
  }
  
  return(
    <>
    <main className="mainContent">
      <form action={addIngredient}>
        <div className="inputAndButton">
          <input type="text" placeholder="e.g oregano" aria-label="Add ingredient" name="ingredient"/>
          <button>+ Add ingredient </button>
        </div>

      </form>
      <section>
        {mapIngredients.length > 0 ? <div className="ingredients-container">
          <h1>{'Ingredients on hand:'}</h1>
          <ul>
            {mapIngredients}
          </ul>
        </div> : null}

        {mapIngredients.length > 3 ? <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={toggleRecipeShown}>{!recipeShown ? `Get a recipe` : `Hide recipe`}</button>
        </div> : null}
      </section>

      {recipeShown ? <RecipeSection /> : null}
    </main>
    </> 
  )
}