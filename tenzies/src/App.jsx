import React from "react";
import Die from "./components/Die";


export default function App(){

 const [dice, setDice] = React.useState(randomNumber());

 function randomNumber() {
  const randomNumbers = new Array(10)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6));

  return randomNumbers;
 }
 
  function rollDice(){
    setDice(randomNumber());
  } 
 
 
 const diceComponents = dice.map(num => <Die value={num}/>);
 
  return(
    <>
      <main className="mainContent">
        <div className="dice-container">
          {diceComponents} 
        </div>
        <button 
          onClick={rollDice}
          className="dice-button">
            Roll Dice
        </button>
      </main>
    </>
  )
}