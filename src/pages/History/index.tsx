import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HistoryImage from '../../assets/illustrations/history.svg';

const HistoryPage = () => {
    return (
        <>
            <Header></Header>
            <h1 className="default-h1">História</h1>
            <main className="default-main">
                <section className="history__content">
                <p className="history__paragraph">Fundado em Campinas em 2021, o <span className="history--bold">Projeto Refloresta</span> é uma organização da sociedade civil com foco em questões ambientais. Entendemos que os humanos e a natureza fazem parte do mesmo sistema orgânico, por isso é de extrema importância que trabalhemos juntos para preservar, proteger e restaurar a natureza.</p>
                <p className="history__paragraph">Acreditamos que a melhor maneira de fazer isso seja por meio da educação, seja ela formal ou lúdica, e utilizá-la como ferramenta de conscientização.</p>
                <p className="history__paragraph">O Projeto realiza a doação de mudas de <span className="history--bold">árvores frutíferas brasileiras</span>, para beneficiar não somente o meio-ambiente como o seu dono.</p>
                </section>
                <div className="history__image-container">
                    <img className="history__illustration" alt="" src={HistoryImage}></img>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}
export default HistoryPage;