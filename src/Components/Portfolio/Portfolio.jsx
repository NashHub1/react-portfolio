import React from 'react'
import IMG1 from '../../Assets/portfolio6.jpg'
import IMG2 from '../../Assets/portfolio5.png'
import IMG3 from '../../Assets/portfolio2.jpg'


import './Portfolio.css'


const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio',
    github: 'https://github.com/NashHub1',
    demo: 'https://nashhub1.github.io/react-portfolio/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'SmartHome',
    github: 'https://github.com/NashHub1/SmartHomeProjekt',
    // demo: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Mikrocontroller - in C - CoAP',
    github: 'https://github.com/NashHub1/VS_Gruppe4_Coap_Sensor',
    // demo: 'https://github.com'
  }

]

const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5 className='text-light'>My Recent Work</h5>
      <h2 className="text-light">Portfolio</h2>

      <div className="container portfolio_container">
        {
          // portfolioData.map(({id, image, title, github, demo}) => {
          portfolioData.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_image">
                  <img src={image} className="image" alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item_cta">
                  <a href={github} className="btn" target="_blank" rel="noopener noreferrer">Github</a>
                  {demo ? (
                    <a href={demo} className="btn btn_primary" target="_blank" rel="noopener noreferrer">
                      Site
                    </a>
                  ) : null}

                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
