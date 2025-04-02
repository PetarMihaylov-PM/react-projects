import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid';


export default function App(){

  const [dice, setDice] = React.useState(randomNumber());

  function randomNumber() {
  const randomNumbers = new Array(10)
    .fill(0)
    .map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }));

  return randomNumbers;
 }
 
  function rollDice(){
    setDice(randomNumber());
  } 

  function hold(id) {
    console.log(id);
  }
  
 
  const diceComponents = dice.map(
  diceObj => <Die 
    key={diceObj.id} 
    value={diceObj.value} 
    isHeld={diceObj.isHeld}
    hold={hold}
    id={diceObj.id}/>
  );
 
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