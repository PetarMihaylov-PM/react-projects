import React from "react";


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
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      
      </section>
    </main>
  )
}