import React from 'react';
import './About.css';
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'

function About() {
  return (
    <section className="about">
      <span className="about-title">
        What I do
      </span>
      <span className="about-description">
        I'm a web developer with a strong foundation in JavaScript and React, passionate about building responsive, user-friendly web applications.
      </span>
    </section>
  )
}

export default About;