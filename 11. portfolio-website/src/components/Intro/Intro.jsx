import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';
import personImg from '../../assets/profile-img.png';
import hireIcon from '../../assets/hireme.png';


const Intro = () => {
  return (
    <section id='intro'>
      <div className="intro-content">
        <span className='hello'>Hello,</span>
        <span className='intro-text'>
          I'm <span className='intro-name'>Petar Mihaylov</span> <br /> Frontend Developer
        </span>
        <p>I'm a frontend developer skilled in creating responsive, visually appealing websites <br /> using modern frameworks like React.</p>
        <Link 
          to='contact-page'
          smooth={true}
          offset={-50}
          duration={500}
        >
            <button className="hire-button">
              <img src={hireIcon} alt="hire-me" 
                />
              <p>
                Hire me
              </p>
            </button>
        </Link>
      
      </div>
      <img src={personImg} alt="person-img" className="person-img" />
    </section>
  )
}

export default Intro;