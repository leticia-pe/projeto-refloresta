import React, { PureComponent } from 'react';
import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import axios from 'axios';
import { Seedling } from '../../model/Seedlings';
import Modal from '../../components/Modal';

interface SeedlingsInterface {
  seedlings: Seedling[] | [];
  apiEndpoint: string;
  modalOpened: boolean;
}

class SeedlingsPage extends PureComponent<SeedlingsInterface> {
  state: SeedlingsInterface = {
    seedlings: [],
    apiEndpoint: 'https://616595ddcb73ea001764210f.mockapi.io/api/v1/seedlings',
    modalOpened: false,
  };

  componentDidMount() {
    axios
      .get(this.state.apiEndpoint)
      .then(response => {
        if (response.status === 200) {
          this.setState({ seedlings: response.data });
        }
      })
      .catch(error => console.log('error:', error));
  }

  onSeedlingClicked(e: any) {
    console.log(e.target);
  }

  render() {
    const { seedlings, modalOpened } = this.state;
    return (
      <>
        <Header></Header>
        <main className="seedlings">
          <h1 className="seedlings__title">Mudas</h1>
          <div className="seedlings__items">
            {seedlings.length
              ? seedlings.map((seedling, index) => (
                  <div className="seedlings__card" key={index}>
                    <div className="seedlings__image-container">
                      <img alt="imagem da muda" src={seedling.picture} className="seedlings__image"></img>
                    </div>
                    <h2 className="seedlings__name">{seedling.name}</h2>
                    <p className="seedlings__scientific-name">{seedling.scientific_name}</p>
                    <p className="seedlings__available-items">
                      Mudas disponíveis: {seedling.items_available}
                    </p>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=5519971382475&text=Oi, gostaria de uma muda de ${seedling.name}.`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <button
                        id={seedling.id}
                        className="seedlings__button"
                        onClick={e => this.onSeedlingClicked(e)}
                      >
                        Quero essa muda
                      </button>
                    </a>
                  </div>
                ))
              : null}
          </div>
        </main>
        <Footer></Footer>
        {modalOpened ? <Modal opened={modalOpened}></Modal> : null}
      </>
    );
  }
}
export default SeedlingsPage;
