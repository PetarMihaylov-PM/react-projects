import React from "react";
import { languages } from "../languages";
import clsx from "clsx";


export default function Main() {
  // State values
  const [currentWord, setCurrentWord] = React.useState('react');
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [wrongGuessCount, setWrongGuessCount] = React.useState(null);

  // Static values
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  function getLetter(letter) {
    if(!guessedLetters.includes(letter)){
      setGuessedLetters(prevLetters => [...prevLetters, letter]); // if the letter is in the array, app will not re-render
      if(!currentWord.includes(letter)) {
        setWrongGuessCount(prevNumber => prevNumber += 1);
      }
    }
  }
  
  console.log(wrongGuessCount);
  

  function Chip (props) {
    return (
      <span 
      className='chip-element'
      key={props.name}
      style={props.style}>
        {props.name}
      </span>
    )
  }
  
  const chips = languages.map((chip, index) => {

    const isDead = wrongGuessCount === (index + 1);

    return( 
      <Chip 
        key={chip.name}
        name={chip.name}
        style={isDead ? 
          {
            backgroundColor: chip.backgroundColor,
            color: chip.color,
            opacity: '0.5'
          } 
          :
          {
            backgroundColor: chip.backgroundColor,
            color: chip.color,
          }
        }
      />
    )
  });

  const keyboardButtons = alphabet.split('').map(letter => {

    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx('keyboard-button', {
      correct: isCorrect,
      wrong: isWrong
    })

    return (
      <button 
        key={letter}
        className={className}
        onClick={() => getLetter(letter, isCorrect)} 
        
      >
        {letter.toLocaleUpperCase()}
      </button>
    )
  })

  const letters = currentWord ? currentWord.split('').map((letter, index) => {
    return (
      <span 
        key={index}
      >
        {guessedLetters.includes(letter) ? letter.toLocaleUpperCase(): ''}
      </span>
    ) 
  }) :
  null;

  return(
    <main>
      <header className="header-container">
        <h1>HangMan: Dev edition</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className="status-bar">
          <h2>You win!</h2>
          <p>Well Done!</p>
      </section>
      <section className="chips">
        {chips}
      </section>
      <section className="word">
        {letters}
      </section>
      <section className="keyboard-container">
        {keyboardButtons}
      </section>
      <button className="newGame-button">New Game</button>
    </main>
  )
}