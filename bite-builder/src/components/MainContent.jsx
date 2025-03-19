import React from "react";

export default function MainContent() {

  const [ingredients, setIngredients] = React.useState([]);
  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

  function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient'); // using the name key of the form;
    setIngredients(prevIngtedients => {
      return[...prevIngtedients, newIngredient]
    });
  }

  return(
    <>
      <form className="mainContent" onSubmit={handleSubmit}>
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