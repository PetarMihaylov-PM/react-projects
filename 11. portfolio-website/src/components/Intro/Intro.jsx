import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';
import personImg from '../../assets/image.png';
import hireIcon from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section className='intro'>
      <div className="intro-content">
        <span className='hello'>Hello,</span>
        <span className='intro-text'>I'm <span className='intro-name'>Kermit</span> <br /> Website Designer</span>
        <p>I'm a web designer skilled in creating responsive, visually appealing websites <br /> using modern frameworks like React.</p>
        <button className="hire-button">
          <img src={hireIcon} alt="hire-me" />
          <p>
            Hire me
          </p>
        </button>
      </div>
      <img src={personImg} alt="person-img" className="person-img" />
    </section>
  )
}

export default Intro;