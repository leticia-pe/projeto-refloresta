import React from 'react';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';
import Logo from '../../assets/logo.svg';
import './styles.scss';
import { Link } from 'react-router-dom';

const Footer = ({ className = '' }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer__top">
        <Link to="/">
          <img className="footer__logo" src={Logo} alt="Logo refloresta"></img>
        </Link>
        <nav className="footer__nav">
          <ul className="footer__list">
            <h3 className="footer__title">O projeto</h3>
            <Link to="/historia" className="footer__link">
              <li className="footer__list-item">História</li>
            </Link>
            <Link to="/patrocine" className="footer__link">
              <li className="footer__list-item">Patrocine</li>
            </Link>
            <Link to="/mudas" className="footer__link">
              <li className="footer__list-item">Mudas</li>
            </Link>
          </ul>
          <ul className="footer__list">
            <h3 className="footer__title">Sustentabilidade</h3>
            <Link to="/sustentabilidade" className="footer__link">
              <li className="footer__list-item">Gestão ambiental</li>
            </Link>
          </ul>
        </nav>
      </div>
      <hr className="footer__separator" />
      <div className="footer__about">
        <p className="footer__company">© 2021 Projeto Refloresta</p>
        <div className="footer__social-media">
          <a href="https://pt-br.facebook.com/" target="_blank" rel="noreferrer">
            <img className="footer__social-icon" src={Facebook} alt="Logo facebook"></img>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img className="footer__social-icon" src={Twitter} alt="Logo Twitter"></img>
          </a>
          <a href="https://www.instagram.com/?hl=pt-br" target="_blank" rel="noreferrer">
            <img className="footer__social-icon" src={Instagram} alt="Logo Instagram"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
