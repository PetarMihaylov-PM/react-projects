import React from 'react';
import './About.css';
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'

function About() {
  return (
    <section id="about">
      <span className="about-title">
        What I do
      </span>
      <span className="about-description">
        I'm a passionate about building responsive, user-friendly web applications. I combine design and development skills to turn ideas into functional, visually engaging web experiences.
      </span>
      <div className="about-bars">
        <div className="about-bar">
          <img src={UIDesign} alt="uidesign-icon" />
          <div className="about-bar-text">
            <h2>UI/UX Design</h2>
            <p>I aim to deliver designs that align with business goals while keeping the user at the core.</p>
          </div>
        </div>
        <div className="about-bar">
          <img src={webDesign} alt="webdesign-icon" />
          <div className="about-bar-text">
            <h2>Web Design</h2>
            <p>I focus on building designs that are responsive, accessible, and optimized for a seamless experience across all devices.</p>
          </div>
        </div>
        <div className="about-bar">
          <img src={appDesign} alt="appdesign-icon" />
          <div className="about-bar-text">
            <h2>App Design</h2>
            <p>My goal is to build apps that look great and offer a smooth, user-friendly experience.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;