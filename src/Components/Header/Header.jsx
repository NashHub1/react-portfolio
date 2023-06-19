import React from 'react'
import CTA from './CTA'
import Nash from '../../Assets/nash_smile.PNG'
import HeaderSocials from './HeaderSocials'

import './Header.css' 
// import sytles from './Header.module.css' //Änderung mit Modules

const Header = () => {
  // const class1 ='container'; //Verwendung von Modules
  // const class2 = sytles.header__container;
  
  return (
    <header>
      {/* <div className={`${class1} ${class2}`}> */}
      <div className='container header__container' >
      
        <h5>Hello I'm</h5>
        <h1>Michael Stephens</h1>
        <h5 className='text_light' >Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='nash'>
          <img src={Nash} alt='Me' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
