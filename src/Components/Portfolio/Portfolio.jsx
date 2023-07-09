import React from 'react'
import IMG1 from '../../Assets/portfolio6.jpg'
import './Portfolio.css'
const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5 className='text-light'>My Recent Work</h5>
      <h2 className="text-light">Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} className="image" alt='Portfolio' />
          </div>
          <h3>SmartHome</h3>
          <div className="portfolio_item_cta">
            <a href="https://github.com/NashHub1" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="" className="btn btn_primary" target="_blank" rel="noopener noreferrer">Site</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} className="image" alt='Portfolio' />
          </div>
          <h3>SmartHome</h3>
          <div className="portfolio_item_cta">
            <a href="" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="" className="btn btn_primary" target="_blank" rel="noopener noreferrer">Site</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} className="image" alt='Portfolio' />
          </div>
          <h3>SmartHome</h3>
          <div className="portfolio_item_cta">
            <a href="" className="btn" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="" className="btn btn_primary" target="_blank" rel="noopener noreferrer">Site</a>
          </div>
        </article>






      </div>

    </section>
  )
}

export default Portfolio
