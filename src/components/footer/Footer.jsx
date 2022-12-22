import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Leo Escaroz</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/leonardo-escaroz-b1b47113b/" className="footer__social-link" target="_blank">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>

                    <a href="https://github.com/Eleoes" className="footer__social-link" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Leonardo Escaroz. All rights reserved</span>
            </div>
            
        </footer>
    )
}

export default Footer;