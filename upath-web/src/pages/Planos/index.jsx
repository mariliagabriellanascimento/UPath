import React, { useEffect } from "react";
import {
  Container,
  Header,
  Main,
  PacotesSection,
  Footer,
} from "./styles";

import VoltarIcon from "../../assets/seta-voltar.svg";
import PlanosIcon from "../../assets/planosAtivo.svg";
import { useNavigate } from "react-router-dom";

const Planos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Planos - UPath";
  }, []);

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="voltar">
          <button id="iconVoltar" onClick={() => navigate(-1)}>
            <img src={VoltarIcon} alt="Voltar" />
          </button><h2>Planos</h2>
        </div>

        <div className="iconPlanos">
          <img src={PlanosIcon} alt="Planos" />
        </div>

      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <PacotesSection>
          <h2 className="titulo-section">Pacotes</h2>
          <div className="cards-pacotes">

            <div className="card-pacote">
              <div className="card-premium">
                <div className="titulo-preco-pacote">
                  <h2>Plano Atual</h2>
                  <div className="preco">
                    <h2>R$</h2>
                    <span>0</span>
                    <p>/mês</p>
                  </div>
                </div>
                <div className="detalhe-pacote">
                  <p>Testes limitados</p>
                  <p>Respostas medianas</p>
                  <p>Resultados generalistas</p>
                </div>
              </div>
            </div>

            <div className="card-pacote">
              <div className="card-premium">
                <div className="titulo-preco-pacote">
                  <h2>Premium</h2>
                  <div className="preco">
                    <h2>R$</h2>
                    <span>20</span>
                    <p>/mês</p>
                  </div>
                </div>
                <div className="detalhe-pacote">
                  <p>Testes ilimitados</p>
                  <p>Melhores respostas</p>
                  <p>Resultados específicos</p>
                </div>
              </div>
              <div className="acao-pacote">
                <button id="botaoAdquirirPremium" className="botao-adquirir">Adquirir</button>
              </div>
            </div>

          </div>
        </PacotesSection>
      </Main>

      {/* Rodapé */}
      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a id="linkContato" href="#">Contato</a> |
          <a id="linkPolitica" href="#">Política de Privacidade</a> |
          <a id="linkTermo" href="#">Termos de Uso</a>
        </div>
      </Footer>
    </Container>
  );
}

export default Planos;