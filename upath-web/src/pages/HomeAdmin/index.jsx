import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  UserArea,
  Main,
  Footer,
  ModalOverlay,
  ModalPerfil,
  RelatoriosContainer,
  FiltrosContainer,
  GraficoContainer,
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import LogoutIcon from "../../assets/logout.svg";

const HomeAdmin = () => {
  const [showPerfil, setShowPerfil] = useState(false);

  const [userNome, setUserNome] = useState("");

  const primeiroNome = userNome.split(" ")[0];

  useEffect(() => {
    document.title = "Home Administrativa - UPath";
    const nome = localStorage.getItem("userNome");
    if (nome) {
      setUserNome(nome);
    }
  }, []);

  return (
    <Container>
      <Header>
        <div className="logo">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
        </div>
        <h1>Painel Administrativo</h1>
        <UserArea>
          <div className="user-info">
            <h3>{primeiroNome}</h3>
            <p>Administrador</p>
          </div>
          <img
            id="iconPerfil"
            src={DefaultAvatar}
            alt="Perfil"
            onClick={() => setShowPerfil(!showPerfil)}
          />
        </UserArea>
      </Header>

      <Main>
        <h1>Gerenciamento de Relatório e Métricas</h1>
        <RelatoriosContainer>
          {/* Filtros */}
          <FiltrosContainer>
            <div className="intro-text">
              <h1>Gerar de Relatório e Métricas</h1>
              <p>Selecione os parâmetros.</p>
            </div>
            <div className="tipo-relatorio-select">
              <label htmlFor="tipoRelatorio">Tipo de Relatório:</label>
              <select id="tipoRelatorio">
                <option value="">Selecione</option>
                <option value="usuarios">Usuários Ativos</option>
                <option value="acessos">Acessos</option>
                <option value="erros">Erros do Sistema</option>
              </select>
            </div>

            <div className="periodo-select">
              <label htmlFor="periodo">Filtro:</label>
              <select id="periodo">
                <option value="">Selecione</option>
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
              </select>
            </div>
          </FiltrosContainer>

          {/* Gráfico (simulado) */}
          <GraficoContainer>
            <h2>Gráfico de Acesso</h2>
            <div className="grafico-barras">
              {[60, 90, 40, 80, 70].map((valor, i) => (
                <div
                  key={i}
                  className="barra"
                  style={{ height: `${valor * 2}px` }}
                ></div>
              ))}
            </div>
            <div className="legenda">
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
            </div>
          </GraficoContainer>
        </RelatoriosContainer>
      </Main>

      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a href="#">Contato</a> | <a href="#">Política de Privacidade</a> |{" "}
          <a href="#">Termos de Uso</a>
        </div>
      </Footer>

      {showPerfil && (
        <ModalOverlay>
          <ModalPerfil>
            <button id="buttonSair">
              <div className="icon-logout">
                <img src={LogoutIcon} alt="Log Out" /> Log Out
              </div>
            </button>
          </ModalPerfil>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default HomeAdmin;
