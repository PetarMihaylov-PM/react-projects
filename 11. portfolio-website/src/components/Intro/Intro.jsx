import React from 'react';
import './Intro.css';
import personImg from '../../assets/profile-img.png';
import hireIcon from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro-content">
        <span className='hello'>Hello,</span>
        <span className='intro-text'>
          I'm <span className='intro-name'>Petar Mihaylov</span> <br /> Frontend Developer
        </span>
        <p>I'm a frontend developer skilled in creating responsive, visually appealing websites <br /> using modern frameworks like React.</p>
        <button 
          className="hire-button"
          onClick={() => {
            document.getElementById('contact-page').  scrollIntoView({behavior: 'smooth'});
          }}>
          <img src={hireIcon} alt="hire-me" 
            />
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