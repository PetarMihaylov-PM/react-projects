import React from "react";
import { languages } from "../languages";


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
  name={chip.name}
  style={{
    backgroundColor: chip.backgroundColor,
    color: chip.color,
}}/>)

export default function Main() {
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
    </main>
  )
}