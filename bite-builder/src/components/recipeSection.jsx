import { getRecipeFromMistral } from "../ai/ai"

export default function RecipeSection(props) {
  return (
      <section>
        {() => getRecipeFromMistral(props.ingredients)}
      </section>
  )
}