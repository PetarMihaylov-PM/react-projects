import Markdown from "react-markdown";

export default function RecipeSection(props) {
  return (
      <section className="recipe-section" aria-live="polite">{props.loading} ? (
        <div className="loading-bar"></div> ) : 
        (<h2>Bite Builder Recommends:</h2>
        <Markdown>
          {props.recipe}
        </Markdown>)
      </section>
  )
}