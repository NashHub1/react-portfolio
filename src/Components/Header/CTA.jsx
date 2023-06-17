import React from 'react'
import CV from '../../Assets/CV_example.png'
function CTA() {
  return (
    <div className='cta'>
      <a href={CV} download>Download CV</a>
      <a href='#contact'>Let's Talk</a>
    </div>
  )
}

export default CTA
