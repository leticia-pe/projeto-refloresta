import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import './styles.scss';

const Header = ({ noButton = false }) => {
  let history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <header className="header">
      <div className="header__content">
        {!noButton && (
          <button className="header__button header--desktop-hidden" onClick={() => goBack()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.356 7.07167C26.453 6.50785 22.403 9.333 18.356 13.3493C14.3105 17.3655 11 21.7234 11 23.0325C11 24.3415 14.3705 28.7598 18.491 32.8487C24.344 38.6577 26.378 39.8836 27.7925 38.4581C29.2085 37.0312 28.391 35.379 24.0515 30.9017C20.999 27.7501 18.5 24.1435 18.5 22.8873C18.5 21.6312 20.8625 18.2952 23.75 15.4745C26.6375 12.6539 29 9.83938 29 9.22114C29 8.60139 28.2605 7.63398 27.356 7.07167Z"
                fill="white"
              />
            </svg>
          </button>
        )}
        <Link to="/">
          <img className="header__logo" src={Logo} alt="Logo refloresta"></img>
        </Link>
      </div>
    </header>
  );
};

export default Header;
