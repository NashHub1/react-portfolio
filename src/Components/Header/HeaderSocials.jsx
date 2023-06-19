import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import "./Header.css"
function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/michael-stephens-7743a31a0' target='blank'><BsLinkedin/></a>
      <a href='https://github.com/NashHub1' target='blank'><BsGithub/></a>

    </div>
  )
}

export default HeaderSocials
