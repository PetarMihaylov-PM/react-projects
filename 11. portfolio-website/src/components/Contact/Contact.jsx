import React, { useRef, useState } from 'react';
import './Contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    if(!name || !email || !message) {
      setError(true);
      setErrorMessage('Please fill all inputs');
      return;
    }

    if(message.length > 500) {
      setErrorMessage('Message too long. Max 500 characters.');
      setError(true);
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
  }
  console.log(errorMessage);

  return (
    <section id="contact-page">
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