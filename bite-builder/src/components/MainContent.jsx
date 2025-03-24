import React from "react";
import IngredientForm from "./IngredientForm.jsx";
import IngredientSection from "./IngredientSection.jsx";
import RecipeSection from "./recipeSection.jsx";
import { getRecipeFromMistral } from "../ai/ai.js";


export default function MainContent() {

  const [ingredients, setIngredients] = React.useState([]);
  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

  const [recipe, setRecipe] = React.useState('');

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

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }
  
  return(
    <>
    <main className="mainContent">
      <IngredientForm addIngredient={addIngredient}/>

      <IngredientSection mapIngredients={mapIngredients} getRecipe={getRecipe} recipe={recipe}/>

      {recipe ? <RecipeSection recipe={recipe}/> : null}
    </main>
    </> 
  )
}