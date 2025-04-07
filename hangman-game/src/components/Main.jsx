import React from "react";
import { languages } from "../languages";
import clsx from "clsx";


export default function Main() {

  const [currentWord, setCurrentWord] = React.useState('react');

  const [guessedLetters, setGuessedLetters] = React.useState([]);

  function getLetter(letter) {
    if(!guessedLetters.includes(letter)){
      setGuessedLetters(prevLetters => [...prevLetters, letter]); // if the letter is in the array, app will not re-render
    }
  }

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
  
  const chips = languages.map(chip => <Chip 
    key={chip.name}
    name={chip.name}
    style={{
      backgroundColor: chip.backgroundColor,
      color: chip.color,
  }}/>);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
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
        onClick={() => getLetter(letter)} 
        
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
        {letter.toLocaleUpperCase()}
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