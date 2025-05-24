import React from 'react';
import './Skills.css';
import gitIcon from '../../assets/git.png';
import javascriptIcon from '../../assets/javascript.png';
import cssIcon from '../../assets/css.png';
import htmlIcon from '../../assets/html.png';
import reactIcon from '../../assets/react.png';

export const Skills = () => {
  return (
    <section className='skills'>
      <h2 className="skills-title">
        Skills
      </h2>
      <span className='skills-description'>
        I continue to learn and gain new skills every day
      </span>
      <div className="skills-container">
        <img src={htmlIcon} alt="html-icon" />
        <img src={cssIcon} alt="css-icon" />
        <img src={javascriptIcon} alt="js-icon" />
        <img src={reactIcon} alt="react-icon" />
        <img src={gitIcon} alt="git-icon" />
      </div>
    </section>
  )
}
