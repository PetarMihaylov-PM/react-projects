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
    <main className="mainContent">
      <form action={addIngredient}>
        <div className="inputAndButton">
          <input type="text" placeholder="e.g oregano" aria-label="Add ingredient" name="ingredient"/>
          <button>+ Add ingredient </button>
        </div>
      </form>
      {mapIngredients.length > 0? <section>
        <div className="ingredients-container">
          <h1>{'Ingredients on hand:'}</h1>
          <ul>
            {mapIngredients}
          </ul>
        </div>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a <br />recipe</button>
        </div>
      </section> : null}
    </main>
      
    </> 
  )
}