import React, { useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png';

const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const TicTacToe = () => {

  const [board, setBoard] = useState(Array(9).fill(''));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCombo, setWinningCombo] = useState([]);

  function checkWinner(newBoard) {
    for (let pattern of winningPattern) {
      const [a, b, c] = pattern;
      if(
        newBoard[a] &&
        newBoard[a] === newBoard[b] && 
        newBoard[a] === newBoard[c]
      ) {
        return { winner: newBoard[a], pattern };
      }
    }
    return null;
  };

  function handleClick(index) {
    if(board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';

    const result = checkWinner(newBoard);
    if(result) {
      setWinner(result.winner);
      setWinningCombo(result.pattern);
    }

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setIsXTurn(true);
    setWinner(null);
    setWinningCombo([]);
  };

  function renderIcon(value) {
    if(value === 'X') return <img src={cross_icon} alt='X'/>
    if(value === 'O') return <img src={circle_icon} alt='O'/>
    return null;
  }

  return (
    <div className='container'>
      <h1 className="title">Tic Tac Toe Game in <span>React</span></h1>
      {winner && <h2 className="winner">🎉 Winner: {winner}</h2>}
      <div className="board">
        {board.map((value, idx) => (
          <div 
            key={idx} 
            className={`boxes ${winningCombo.includes(idx) ? 'winning' : ''}`} 
            onClick={() => handleClick(idx)}
            >
            {renderIcon(value)}
          </div>
        ))}
      </div>
      <button className='reset-button' onClick={resetGame}>Reset</button>
    </div>
  );
}
