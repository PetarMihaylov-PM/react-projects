import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../assets/cooking1.JPG';
import portfolio2 from '../../assets/ai1.JPG';
import portfolio3 from '../../assets/quiz.jpg';
import portfolio4 from '../../assets/hangman.jpg';
import portfolio5 from '../../assets/tenzies.jpg';
import portfolio6 from '../../assets/meme.jpg';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="porfolio-title">
        My Portfolio
      </h2>
      <span className='portfolio-description'>
        A collection of my work as a front-end developer, featuring projects that demonstrate my skills in responsive design, modern UI, and clean, efficient code.
      </span>
      <div className="portfolio-imgs-container">
        <img src={portfolio1} alt="" className="portfolio-img wide-img" />
        <img src={portfolio4} alt="" className="portfolio-img portfolio-img2" />
        <img src={portfolio3} alt="" className="portfolio-img" />
        <img src={portfolio2} alt="" className="portfolio-img wide-img" />
        <img src={portfolio5} alt="" className="portfolio-img" />
        <img src={portfolio6} alt="" className="portfolio-img portfolio-img2" />
      </div>
      <a 
        href="https://github.com/PetarMihaylov-PM/react-projects"
        target='_blank'>
        <button className='portfolio-btn'>See more</button>
      </a>
    </section>
  )
}

export default Portfolio