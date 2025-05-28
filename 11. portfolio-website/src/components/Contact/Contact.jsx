import React, { use, useRef, useState } from 'react';
import './Contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
import phoneIcon from '../../assets/phone.png';

import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    if(!name || !email || !message || message.length > 500) {
      setError(true);
      !message ? 
        setSubmitMessage('Please fill all inputs') 
        : 
        setSubmitMessage('Message too long. Max 500 characters.');

      setTimeout(() => {
        setSubmitMessage('');
      }, 3000);

      return;
    }

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
    
    setError(false);
    setSubmitMessage('Your message has been sent successfully!');

    setTimeout(() => {
        setSubmitMessage('');
      }, 3000);
  }
  console.log(submitMessage);

  return (
    <section id="contact-page">
      {submitMessage
        ? 
          error ? 
          <div className='error-message'>
          {submitMessage}
          </div> 
          :
          <div className='successful-message'>
          {submitMessage}
          </div>
        : 
        null
      }
      <h2 className="contact-page-title">
        Contact me
      </h2>
      <span className='contact-description'>
        Please fill out the form below to discuss potential work opportunities.
      </span>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <input type="text" className={`name ${!name && error ? 'error' : ''}`} placeholder='Your Name' name='from_name' onChange={(e) => setName(e.target.value)}/>
        <input type="email" className={`email ${!email && error ? 'error' : ''}`} placeholder='Your Email' name='from_email' onChange={(e) => setEmail(e.target.value)}/>
        <textarea 
          name="message" 
          rows='5' 
          placeholder='Your Message'
          className={`message ${!message && error ? 'error' : ''}`} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button 
            type='submit'
            value='Send'
            className='submit-button'
          >
            Submit
          </button>
          <div className="links">
            <a href="https://www.facebook.com/Petar.Mihaylovv" target='_blank'>
              <img src={facebookIcon} alt="facebookIcon" className='link'/>
            </a>
            <a href="https://github.com/PetarMihaylov-PM" target='_blank'>
              <img src={githubIcon} alt="githubIcon" className='link github-icon'/>
            </a>
            <a href="https://linkedin.com/in/petar-mihaylovv" target='_blank'>
              <img src={linkedinIcon} alt="linkedinIcon" className='link linkedin-icon'/>
            </a>
            <a href="https://linkedin.com/in/petar-mihaylovv" target='_blank'>
              <img src={phoneIcon} alt="phoneIcon" className='link phone-icon'/>
            </a>
          </div>
      </form>
    </section>
  )
}

export default Contact