import React from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import PortfolioItems from './PortfolioItems';

const Projects = () => {
    return (
        <div>
            <div className="portfolio__filters">
            {projectsNav.map((item, index) => {
                return (
                    <span className="project__item" key={index}>{item.name}</span>
                )
            })}
            </div>

            <div className="portfolio__container container grid">
                {projectsData.map((item) => {
                    return <PortfolioItems item={item} key={item.id}/>
                })}
            </div>
        </div>
    )
}

export default Projects;