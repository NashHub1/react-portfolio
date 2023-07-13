import React from 'react'
import CV from '../../Assets/Lebenslauf_modern_Abgedeckt.pdf'
import './Header.css'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV</a>
      <a href='#Contact' className='btn btn_primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
