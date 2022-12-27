import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bxs-leaf' ></i>
                <h3 className="about__title">Plant Parent</h3>
                <span className="about__subtitle">I grow plants</span>
            </div>

            <div className="about__box">
            <i className='bx bxs-keyboard' ></i>
                <h3 className="about__title">Web Dev</h3>
                <span className="about__subtitle">I code</span>
            </div>

            <div className="about__box">
            <i className='bx bx-building-house' ></i>
                <h3 className="about__title">Architect</h3>
                <span className="about__subtitle">I design buildings</span>
            </div>
        </div>
    )
}

export default Info;