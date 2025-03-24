export default function IngredientSection(props) {
  return (
    <section>
        {props.mapIngredients.length > 0 ? <div className="ingredients-container">
          <h1>Ingredients on hand:</h1>
          <ul>
            {props.mapIngredients}
          </ul>
        </div> : null}

        {props.mapIngredients.length > 3 ? <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>{!props.isRecipeShown ? 'Get a recipe' : 'Hide recipe'}</button>
        </div> : null}
      </section>
  )
}