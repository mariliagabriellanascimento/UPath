import React, { useEffect } from "react";
import {
  Container,
  Header,
  Main,
  EquipeSection,
  Footer,
} from "./styles";

import VoltarIcon from "../../assets/seta-voltar.svg";
import InfoIcon from "../../assets/sobreAtivo.svg";
import ImgDirelly from "../../assets/Direlly.png";
import ImgFilipe from "../../assets/Filipe.png";
import ImgGuilherme from "../../assets/Guilherme.png";
import ImgIgor from "../../assets/Igor.png";
import ImgIngrid from "../../assets/Ingrid.png";
import ImgJackson from "../../assets/Jackson.png";
import ImgJuliana from "../../assets/Juliana.png";
import ImgMauri from "../../assets/Mauri.png"; 
import ImgMilena from "../../assets/Milena.png";

import { useNavigate } from "react-router-dom";

const Sobre = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Sobre Nós - UPath";
  }, []);

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="voltar">
          <button id="iconVoltar" onClick={() => navigate(-1)}>
            <img src={VoltarIcon} alt="Voltar" />
          </button><h2>Sobre Nós</h2>
        </div>
        <div className="iconSobre">
          <img src={InfoIcon} alt="SobreNos" />
        </div>
      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <EquipeSection>
          <h3>Conheça a Equipe UPath</h3>
          <div className="cards-equipe">
            <div className="card-membro">
              <img src={ImgDirelly} alt="Direlly Kaline" />
              <h2>Direlly Kaline</h2>
              <p>Desenvolvedora Back-end</p>
            </div>
            <div className="card-membro">
              <img src={ImgFilipe} alt="Filipe Leonny" />
              <h2>Filipe Leonny</h2>
              <p>Desenvolvedor Front-end</p>
            </div>
            <div className="card-membro">
              <img src={ImgGuilherme} alt="Guilherme Felipe" />
              <h2>Guilherme Felipe</h2>
              <p>Analista de Dados (IA)</p>
            </div>
            <div className="card-membro">
              <img src={ImgIgor} alt="Igor Machado" />
              <h2>Igor Machado</h2>
              <p>Desenvolvedor Back-end</p>
            </div>
            <div className="card-membro">
              <img src={ImgIngrid} alt="Ingrid Santos" />
              <h2>Ingrid Santos</h2>
              <p>Analista de Dados (IA)</p>
            </div>
            <div className="card-membro">
              <img src={ImgJackson} alt="Jackson Luiz" />
              <h2>Jackson Luiz</h2>
              <p>Analista de Dados (IA)</p>
            </div>
            <div className="card-membro">
              <img src={ImgJuliana} alt="Juliana Gonçalo" />
              <h2>Juliana Gonçalo</h2>
              <p>Desenvolvedora Front-end</p>
            </div>
            <div className="card-membro">
              <img src={ImgMauri} alt="Mauri Almeida" />
              <h2>Mauri Almeida</h2>
              <p>Designer UX/UI</p>
            </div>
            <div className="card-membro">
              <img src={ImgMilena} alt="Milena Melo" />
              <h2>Milena Melo</h2>
              <p>Desenvolvedora Front-end</p>
            </div>
          </div>
        </EquipeSection>
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

export default Sobre;