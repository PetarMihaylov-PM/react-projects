import React from "react";
import Die from "./components/Die";


export default function App(){

  const [dice, setDice] = React.useState(generateAllDice());

  function generateAllDice() {
    return new Array(10)
      .fill(0)
      .map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map(num => <Die value={num}/>)
  
  return(
    <>
      <main className="mainContent">
        <div className="dice-container">
          {diceElements}
        </div>
        
      </main>
    </>
  )
}