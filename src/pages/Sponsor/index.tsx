import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SponsorImage from '../../assets/illustrations/donate.svg';

const SponsorPage = () => {
    return (
        <>
            <Header></Header>
            <h1 className="default-h1">Patrocine</h1>
            <main className="default-main">
            <section className="sponsor__content">
                <h2 className="sponsor__title">Seja um patrocinador!</h2>
                <p className="sponsor__paragraph sponsor--text-small">O projeto não conta com apoio governamental, e para arcar com suas despesas depende o apoio de todos que se identificam com a causa.</p>
                <hr className="sponsor__separator"/>
                <h3 className="sponsor__cc-title">Dados bancários:</h3>
                <p className="sponsor__info">Chave PIX / CNPJ: 63.877.066/0001-84</p>
                <p className="sponsor__info">Itaú Unibanco</p>
                <p className="sponsor__info">Agência: 7992 CC: 20123</p>
                <p className="sponsor__info">Projeto Refloresta do Brasil</p>
            </section>
                <div className="sponsor__image-container">
                    <img className="sponsor__illustration" alt="" src={SponsorImage}></img>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default SponsorPage;