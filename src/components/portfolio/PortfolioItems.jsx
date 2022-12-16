import React from 'react'

const PortfolioItems = ({item}) => {
    return (
        <div className="portfolio__card" key={item.id}>
            <img src={item.image} alt="project image" className='portfolio__img' />
        </div>
    )
}

export default PortfolioItems