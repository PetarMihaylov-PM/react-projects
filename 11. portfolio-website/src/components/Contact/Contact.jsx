import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-page">
      <h2 className="contact-page-title">
        Contact me
      </h2>
      <span>
        Please fill out the form below to discuss potential work opportunities.
      </span>
      <form className='contact-form'>
        <input type="text" className='name' placeholder='Your Name'/>
        <input type="email" className="contact-email" placeholder='Your Email'/>
        <textarea 
          name="message" 
          rows='5' 
          placeholder='Your Message'
          className='contact-page-message'></textarea>
          <button 
            type='submit'
            value='Send'
            className='submit-button'
          >
            Submit
          </button>
          <div className="links">
            <img src={} alt="link" className='link'/>
          </div>
      </form>
    </section>
  )
}

export default Contact