import React from "react";
import { languages } from "../languages";
import clsx from "clsx";
import { getFarewellText } from "../utils";
import ReactConfetti from "react-confetti";
import { words } from "../words";
import {motion} from "motion/react";


export default function Main() {

  // State values
  const [currentWord, setCurrentWord] = React.useState('react'/*() => getRandomWord()*/);
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [wrongGuessCount, setWrongGuessCount] = React.useState(null);




  // Static values
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const isGameLost = wrongGuessCount >= (languages.length - 1) ? true : false;
  const isGameWon = currentWord.split('').every(letter => guessedLetters.includes(letter)) && wrongGuessCount < languages.length;
  const isGameOver = isGameLost || isGameWon;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessCorrect = guessedLetters.length > 0 ? currentWord.includes(lastGuessedLetter) : undefined;
  

  function getLetter(letter) {
    if(!guessedLetters.includes(letter)){
      setGuessedLetters(prevLetters => [...prevLetters, letter]); // if the letter is in the array, app will not re-render
      if(!currentWord.includes(letter)) {
        setWrongGuessCount(prevNumber => prevNumber += 1);
      }
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
  
  const chips = languages.map((chip, index) => {
    const isLanguageLost = index < wrongGuessCount;
    return( 
      <Chip 
        key={chip.name}
        name={chip.name}
        style={isLanguageLost ? 
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
      <motion.button 
        key={letter}
        className={className}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        onClick={() => getLetter(letter, isCorrect)} 
        whileHover={{
          transition: {duration: 0.1},
          scale: 1.1}}
        whileTap={{
          transition: {duration: 0.02},
          scale: 0.95}}
      >
        {letter.toLocaleUpperCase()}
      </motion.button>
    )
  })

  const letters = currentWord ? currentWord.split('').map((letter, index) => {
    // revealing the word when the game is lost
    if(isGameOver && isGameLost){
      const letterClassName = clsx(
        isGameLost && !guessedLetters.includes(letter) && 'missed-letter'
      )
      return(
        <span 
        className={letterClassName}
        key={index}
      >
        {letter.toLocaleUpperCase()}
      </span>
      )
    } 
    // rendering the letter of emply space when playing
    else {
      return (
        <span 
          key={index}
        >
          {guessedLetters.includes(letter) ? letter.toLocaleUpperCase(): ''}
        </span>
      )
    }
  }) :
  null;

  const statusBarClassName = clsx('status-bar', {
    won: isGameWon,
    lost: isGameLost
  });

  function renderStatusBar () {
    if(!isGameOver && !isLastGuessCorrect){
      
      if(guessedLetters.length <= 0){
        return null;
      } else {
        return (
          <p className="farewell-message">
            {getFarewellText(languages[wrongGuessCount - 1].name)} 😧
          </p>
        )
      }
      
    }
    
    if (isGameLost || isGameWon) {
      return (
        <>
          <h2>{isGameWon ? 'You win!' : 'Game over!'}</h2>
          <p>{isGameWon ? '🎉 Well Done! 🎉' : '😥 You lose! Better luck next time! 😥'}</p>
        </>
      )
    } 
    
    else {
        return null
    }
  }

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function resetGame() {
    setGuessedLetters([]);
    setWrongGuessCount(null);
    setCurrentWord(getRandomWord);
  }

  return(
    <main>
      {isGameWon ? 
        <ReactConfetti 
          className="confetti"
          recycle={false}
          numberOfPieces={1200}
        /> 
        : 
        null
      }
      <header className="header-container">
        <h1>HangMan: Dev edition</h1>
        <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
      </header>
      <section className="section-container">
        <motion.section 
          key={guessedLetters}
          aria-live='polite' 
          role='status' 
          className={statusBarClassName}
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{duration: 0.5}}
          >
            {renderStatusBar()}
        </motion.section>
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
      {isGameOver ? 
        <button 
          className="newGame-button"
          onClick={resetGame}
          >New Game
        </button> 
        : 
        null}
    </main>
  )
}