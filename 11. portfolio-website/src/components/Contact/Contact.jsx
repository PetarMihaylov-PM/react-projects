import React, { useRef } from 'react';
import './Contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.
      sendForm( 'service_sx7k3nh', 
                'template_8hmwtud', 
                form.current,
                'nwWAvJVux0UXdjy4z')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <section id="contact-page">
      <h2 className="contact-page-title">
        Contact me
      </h2>
      <span className='contact-description'>
        Please fill out the form below to discuss potential work opportunities.
      </span>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <input type="text" className='name' placeholder='Your Name'name='from_name'/>
        <input type="email" className="email" placeholder='Your Email' name='from_email'/>
        <textarea 
          name="message" 
          rows='5' 
          placeholder='Your Message'
          className='message'></textarea>
          <button 
            type='submit'
            value='Send'
            className='submit-button'
          >
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="facebookIcon" className='link'/>
            <img src={twitterIcon} alt="twitterIcon" className='link'/>
            <img src={youtubeIcon} alt="youtubeIcon" className='link'/>
            <img src={instagramIcon} alt="instagramIcon" className='link'/>
          </div>
      </form>
    </section>
  )
}

export default Contact