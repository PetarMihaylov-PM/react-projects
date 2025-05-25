import React from 'react';
import './Skills.css';
import gitIcon from '../../assets/git.png';
import javascriptIcon from '../../assets/javascript.png';
import cssIcon from '../../assets/css.png';
import htmlIcon from '../../assets/html.png';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node.png';

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className="skills-title">
        Skills
      </h2>
      <span className='skills-description'>
        I'm a front-end developer with a strong foundation in HTML, CSS, JavaScript, React, and Git. I'm passionate about building clean, responsive user interfaces and continuously learning to grow my skills and stay up to date with modern web development practices.
      </span>
      <div className="skills-container">
        <img src={htmlIcon} alt="html-icon" />
        <img src={cssIcon} alt="css-icon" />
        <img src={javascriptIcon} alt="js-icon" />
        <img src={reactIcon} alt="react-icon" />
        <img src={gitIcon} alt="git-icon" />
        <img src={nodeIcon} alt="node-icon" />
      </div>
    </section>
  )
}

export default Skills;
