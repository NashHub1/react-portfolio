import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Michael Stephens</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/michael-stephens-7743a31a0" target="blank">
          <BsLinkedin/>
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; {new Date().getFullYear()} Michael Stephens. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
