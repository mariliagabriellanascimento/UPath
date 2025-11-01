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
import { useNavigate  } from "react-router-dom";

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
          <h3>Pacotes</h3>
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