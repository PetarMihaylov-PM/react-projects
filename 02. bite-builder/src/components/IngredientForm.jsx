export default function IngredientForm(props) {
  return (
      <form action={props.addIngredient}>
        <div className="inputAndButton">
          <input type="text" placeholder="e.g oregano" aria-label="Add ingredient" name="ingredient"/>
          <button>+ Add ingredient </button>
        </div>
      </form>
  )
}