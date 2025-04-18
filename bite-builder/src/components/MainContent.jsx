import React from "react";
import IngredientForm from "./IngredientForm.jsx";
import IngredientSection from "./IngredientSection.jsx";
import RecipeSection from "./recipeSection.jsx";
import LoadingBar from "./LoadingBar.jsx";
import { getRecipeFromMistral, fakeFetch } from "../ai/ai.js";


export default function MainContent() {

  const [ingredients, setIngredients] = React.useState(['beef','eggs','corn', 'potatoes']);
  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

  const [recipe, setRecipe] = React.useState('');

  const [loading, setLoading] = React.useState(false);

  const recipeSectionRef = React.useRef(null);
  console.log(recipeSectionRef);

  React.useEffect(() => {
    if(recipe !== '' && recipeSectionRef.current !== null){
      recipeSectionRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  },[recipe]);


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

  // this is a fakeFetch func, for dev purposes. Use the second getRecipe() to test the real AI response.
  async function getRecipe(){
    setLoading(prevState => !prevState);
    const recipeMarkdown = await fakeFetch();
    setRecipe(recipeMarkdown);
    setLoading(prevState => !prevState);
  }

  /*
  async function getRecipe(){
    setLoading(prevState => !prevState);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(prevState => !prevState);
  }*/
  
  return(
    <>
    <main className="mainContent">
      <IngredientForm addIngredient={addIngredient}/>

      <IngredientSection 
      ref={recipeSectionRef}
      mapIngredients={mapIngredients} getRecipe={getRecipe} recipe={recipe}/>

      { recipe ? <RecipeSection recipe={recipe}/> : <LoadingBar loading={loading}/>}
    </main>
    </> 
  )
}