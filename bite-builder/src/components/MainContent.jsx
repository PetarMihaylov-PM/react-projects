import React from "react";
import RecipeSection from "./recipeSection.jsx";
import IngredientSection from "./IngredientSection.jsx";
import IngredientForm from "./IngredientForm.jsx";

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
      <IngredientForm addIngredient={addIngredient}/>

      <IngredientSection mapIngredients={mapIngredients} toggleRecipeShown={toggleRecipeShown} isRecipeShown={recipeShown}/>

      {recipeShown ? <RecipeSection /> : null}
    </main>
    </> 
  )
}