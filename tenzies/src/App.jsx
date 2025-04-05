import React from "react";
import Die from "./components/Die";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';


export default function App(){

  const [dice, setDice] = React.useState(() => getAllDice());
  const buttonRef = React.useRef(null);

  const isGameWon =  
    dice.every(die => die.isHeld) && 
    dice.every(die => die.value === dice[0].value) ? true : false;
    
  React.useEffect(() => {
    if(isGameWon) {
      buttonRef.current.focus();
    }
  }, [isGameWon])
    
  function getAllDice() {
    const randomNumbers = new Array(10)
      .fill(0)
      .map(() => ({
        value: Math.ceil(Math.random() * 6),
        // value: 6,
        isHeld: false,
        id: nanoid()
      }));

    return randomNumbers;
 }
 
  function rollDice(){
    if(!isGameWon){
      setDice(prevDice => prevDice.map(die => 
        die.isHeld ? 
          die : 
          {
            ...die,
            value: Math.ceil(Math.random() * 6),
          }
      ));
    } else {
      setDice(getAllDice());
    }
    
  } 

  function hold(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        if(die.id === id){
          return {
            ...die,
            isHeld: !die.isHeld
          }
        } else {
          return die
        }
      })
    })
  }
  
 
  const diceComponents = dice.map(
    diceObj => <Die 
      className={diceObj.className}
      key={diceObj.id} 
      value={diceObj.value} 
      isHeld={diceObj.isHeld}
      hold={hold}
      id={diceObj.id}/>
  );
 
  return(
    <>
      <main className="mainContent">
        {isGameWon ? 
          <Confetti 
            width={1800} 
            height={1800}
            numberOfPieces={700}
            className="confetti"
          /> : null}
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll 10 dice and hold matching numbers. Keep rolling the rest until all dice show the same number. Win in the fewest rolls!</p>
        <div className="dice-container">
          {diceComponents} 
        </div>
        <button 
          ref={buttonRef}
          onClick={rollDice}
          className="dice-button">
            { isGameWon ? 'New Game' : 'Roll Dice'}
        </button>
      </main>
    </>
  )
}