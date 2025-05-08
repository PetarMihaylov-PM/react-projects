import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets.js';

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user_icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Peter.</span></p>
          <p>How can I help you today?</p>
        </div>
      </div>
    </div>
  )
}

export default Main
