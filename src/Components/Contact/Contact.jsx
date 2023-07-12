import React from 'react'
import './Contact.css'
import { BsEnvelope,BsLinkedin } from 'react-icons/bs'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <BsEnvelope className="contact_option-icon" />
            <h4>E-mail</h4>
            <h5>dummyMailStephens@live.com</h5>
            <a href="mailto:dummyMailStephens@live.com" >Send a message</a>
          </article>
          <article className="contact_option">
            <BsLinkedin className="contact_option-icon" />
            <h4>LinkedIn</h4>
            <h5>Michael Stephens</h5>
            <a href="https://www.linkedin.com/in/michael-stephens-7743a31a0" target='blank'>Send a message</a>
          </article>
        </div>
        {/* Contact Form below */}
        <form >
            <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" rows="7" required placeholder="Your Message"></textarea>
            <button type="submit" className="btn btn_primary" onClick={()=> alert('This is an example form. Function was not enabled by admin ') }>Send Message</button>
            {/* <span>{msg}</span> */}
          </form>
      </div>

    </section>
  )
}

export default Contact
