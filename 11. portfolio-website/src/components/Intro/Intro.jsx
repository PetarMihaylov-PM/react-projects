import React from 'react';
import './Intro.css';
import personImg from '../../assets/image.png';

const Intro = () => {
  return (
    <section className='intro'>
      <div className="intro-content">

      </div>
      <img src={personImg} alt="" className="person-img" />
    </section>
  )
}

export default Intro;