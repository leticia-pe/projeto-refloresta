import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SustentabilityImage from '../../assets/illustrations/sustentabilidade.svg';

const SustentabilityPage = () => {
  return (
    <>
      <Header></Header>
      <h1 className="default-h1">Gestão Ambiental</h1>
      <main className="default-main">
        <section className="default-content">
          <p className="default-p">
            A <span className="default--bold">Gestão ambiental</span> é a atividade relacionada ao uso
            inteligente dos recursos naturais.
          </p>
          <p className="default-p">
            Cabe a nós, e não só aos gestores ambientais, a missão de se atentar aos impactos que podem ser
            causados no meio ambiente para, assim, propor medidas capazes de reduzir os danos, além de
            disseminar práticas sustentáveis.
          </p>
          <p className="default-p">
            O gestor ambiental, que é o responsável por esse exercício, tem ainda a missão de equilibrar os
            interesses empresariais e as necessidades ecológicas, a fim de encontrar um denominador comum.
            Isso porque, dependendo do ramo em que o negócio está inserido, pode haver muitos processos
            nocivos à natureza, o que impõe desafios importantes para que as operações sejam realizadas de
            maneira a gerar o menor passivo ambiental possível.{' '}
          </p>
          <p className="default-p">
            A gestão ambiental se encaixa no contexto de empresas de ramos e portes distintos. Além de poder
            ser aplicada de diversas formas pelas organizações.
          </p>
          <p className="default-p">Alguns dos principais métodos são:</p>
          <ul className="default-ul">
            <li className="default-li">Criação de políticas ambientais</li>
            <li className="default-li">Implantação de um sistema de descarte e reciclagem de resíduos</li>
            <li className="default-li">Tratamento de água</li>
            <li className="default-li">Economia de energia</li>
            <li className="default-li">Ações de conscientização pós-consumo</li>
            <li className="default-li">Redução da poluição atmosférica.</li>
          </ul>
          <p className="default-p">
            Muitos deles se adaptam melhor às indústrias. Afinal, nessas empresas, os processos de produção
            são maiores e exigem mais recursos. No entanto, negócios pequenos também podem se beneficiar de
            tais práticas. Um restaurante que faz entrega pelo bairro, por exemplo, tem a oportunidade de usar
            a bicicleta como veículo. Dessa forma, é possível colaborar com a redução na emissão de poluentes.
            O ideal é que cada empresa faça o exercício de reflexão sobre as rotinas a fim de encontrar
            hábitos que possam ser transformados em prol do meio ambiente.
          </p>
        </section>
        <div>
          <img className="default-illustration" alt="" src={SustentabilityImage}></img>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
export default SustentabilityPage;
