import Markdown from "react-markdown";

export default function RecipeSection(props) {
  return (
      <section>
        <Markdown>
          {props.recipe}
        </Markdown>
      </section>
  )
}