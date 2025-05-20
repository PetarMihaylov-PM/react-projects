import React from 'react';
import './Portfolio.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="porfolio-title">
        My Portfolio
      </h2>
      <span className='portfolio-description'>
        A showcase of my work as a web designer and developer, featuring projects that highlight my skills in modern UI design, responsive layouts, and clean, functional code.
      </span>
      <div className="portfolio-imgs-container">
        <img src={portfolio1} alt="" className="portfolio-img" />
        <img src={portfolio2} alt="" className="portfolio-img" />
        <img src={portfolio3} alt="" className="portfolio-img" />
        <img src={portfolio4} alt="" className="portfolio-img" />
        <img src={portfolio5} alt="" className="portfolio-img" />
        <img src={portfolio6} alt="" className="portfolio-img" />
      </div>
      <button className='portfolio-btn'>See more</button>
    </section>
  )
}

export default Portfolio