import React from 'react'
import CTA from './CTA'
const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Michael Stephens</h1>
        <h5 className='text_light' >Fullstack Developer</h5>
        <CTA></CTA>

      </div>
    </header>
  )
}

export default Header
