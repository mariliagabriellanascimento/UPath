import React, { useEffect } from "react";
import {
  Container,
  Header,
  Main,
  SalvosSection,
  Footer,
} from "./styles";

import VoltarIcon from "../../assets/seta-voltar.svg";
import SalvosIcon from "../../assets/salvosAtivo.svg";
import { useNavigate  } from "react-router-dom";

const Salvos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Salvos - UPath";
  }, []);

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="voltar">
          <button id="iconVoltar" onClick={() => navigate(-1)}>
            <img src={VoltarIcon} alt="Voltar" />
          </button><h2>Salvos</h2>
        </div>

        <div className="iconSalvos">
          <img src={SalvosIcon} alt="Salvos" />
        </div>

      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <SalvosSection>
          <h3>Testes Salvos</h3>
          <h3>Simulações Salvas</h3>
        </SalvosSection>
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

export default Salvos;