import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Waves from '../../assets/waves.svg';
import Hands from '../../assets/hands.svg';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <Header noButton></Header>
      <main className="home">
        <div className="home__banner">
          <div className="home__cta">
            <div className="home__logo">
              <h1 className="home__title-small">projeto</h1>
              <h1 className="home__title">Refloresta</h1>
            </div>
            <Link to="/mudas">
              <button className="home__button">Solicitar muda</button>
            </Link>
          </div>
          <img
            className="home__hands"
            src={Hands}
            alt="Ilustração de mãos segurando uma muda de planta"
          ></img>
        </div>
        <img className="home__waves" src={Waves} alt=""></img>
      </main>
      <Footer className="home__footer"></Footer>
    </>
  );
};

export default HomePage;
