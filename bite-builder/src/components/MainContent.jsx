import React from "react";
import IngredientForm from "./IngredientForm.jsx";
import IngredientSection from "./IngredientSection.jsx";
import RecipeSection from "./recipeSection.jsx";
import LoadingBar from "./LoadingBar.jsx";
import { getRecipeFromMistral } from "../ai/ai.js";


export default function MainContent() {

  const [ingredients, setIngredients] = React.useState(['beef','eggs','corn','beans']);
  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

  const [recipe, setRecipe] = React.useState('');

  const [loading, setLoading] = React.useState(false);


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
    setLoading(prevState => !prevState);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(prevState => !prevState);
  }
  
  return(
    <>
    <main className="mainContent">
      <IngredientForm addIngredient={addIngredient}/>

      <IngredientSection mapIngredients={mapIngredients} getRecipe={getRecipe} recipe={recipe}/>

      { recipe ? <RecipeSection recipe={recipe}/> : <LoadingBar loading={loading}/>}
    </main>
    </> 
  )
}