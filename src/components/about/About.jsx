import React from 'react'
import "./about.css";
import Portrait from "../../assets/Portrait.jpg";
import Resume from "../../assets/Leo Escaroz_Resume.pdf";
import Info from './Info';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={Portrait} alt="My Portrait" className="about__img" />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        Web developer, I create web pages ...
                    </p>

                    <a download="" href={Resume} className="button button--flex">Resume</a>
                </div>
            </div>
        </section>
    )
}

export default About;