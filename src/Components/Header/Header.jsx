import React from 'react'
import CTA from './CTA'
import Nash from '../../Assets/nash_smile.PNG'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
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
