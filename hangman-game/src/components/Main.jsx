import React from "react";
import { languages } from "../languages";


export default function Main() {

  const [currentWord, setCurrentWord] = React.useState('react');


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

  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toLocaleUpperCase();
  const keyboardButtons = alphabet.split('').map(keyButton => {
    return (
      <button className="keyboard-button" key={keyButton}>{keyButton}</button>
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
    </main>
  )
}