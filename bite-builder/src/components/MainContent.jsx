export default function MainContent() {
  const ingredients = ['chicken', 'tomatoes', 'Oregano'];

  function handleSubmit(event){
    event.preventDefault();
    console.log('submitted');
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredient'); // using the name key of the form;
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  const mapIngredients = ingredients.map(element => {
    return(
      <li key={element}> {element} </li>
    )
  });

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