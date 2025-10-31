import React, { useEffect} from "react";
import {
  Container,
  Header,
  Main,
  EquipeSection,
  Footer,
} from "./styles";

import VoltarIcon from "../../assets/seta-voltar.svg";
import InfoIcon from "../../assets/sobreAtivo.svg";
import { useNavigate  } from "react-router-dom";

const Equipe = () => {
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

export default Equipe;