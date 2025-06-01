import React from 'react';
import './Skills.css';
import gitIcon from '../../assets/git.png';
import javascriptIcon from '../../assets/javascript.png';
import cssIcon from '../../assets/css.png';
import htmlIcon from '../../assets/html.png';
import reactIcon from '../../assets/react.png';
import nodeIcon from '../../assets/node.png';
import bootstrapIcon from '../../assets/bootstrap.png';
import viteIcon from '../../assets/vite.png';

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className="skills-title">
        Skills
      </h2>
      <span className='skills-description'>
        I have a strong foundation in HTML, CSS, JavaScript, React, Git, Bootstrap, and Vite. I’m continuously learning and expanding my skill set to stay up to date with modern front-end development practices.
      </span>
      <div className="skills-container">
        <img src={htmlIcon} alt="html-icon" />
        <img src={cssIcon} alt="css-icon" />
        <img src={javascriptIcon} alt="js-icon" />
        <img src={reactIcon} alt="react-icon" />
        <img src={gitIcon} alt="git-icon" />
        <img src={nodeIcon} alt="node-icon" />
        <img src={bootstrapIcon} alt="bootstrap-icon" />
        <img src={viteIcon} alt="vite-icon" />
      </div>
    </section>
  )
}

export default Skills;
