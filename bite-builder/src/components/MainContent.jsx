import React from "react";

export default function MainContent() {

  const [ingredients, setIngredients] = React.useState([]);
  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

  //approach with onSubmit
  /*
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
  return(
    <>
      <form className="mainContent" action={addIngredient}>
        <div className="inputAndButton">
          <input type="text" placeholder="e.g oregano" aria-label="Add ingredient" name="ingredient"/>
          <button>+ Add ingredient </button>
        </div>
        <div className="ingredients-container">
          <h1>Ingredients on hand:</h1>
          <ul>
            {mapIngredients}
          </ul>
        </div>
      </form>
    </> 
  )
}