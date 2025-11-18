import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  UserArea,
  Main,
  Footer,
  ModalOverlay,
  ModalPerfil,
  NavBar,
  NavButton,
  ContentBox,
  RelatoriosContainer,
  FiltrosContainer,
  GraficoContainer,
} from "./styles";


import Logo from "../../assets/logo-upath-2.svg";
import AdminImg from "../../assets/adminImg.svg";
import UserImg from "../../assets/userImg.svg";
import LogoutIcon from "../../assets/logout.svg";
import EstudanteIcon from "../../assets/estudante.svg";
import EstudanteIconAtivo from "../../assets/estudanteAtivo.svg";
import RelatorioIcon from "../../assets/relatorio.svg";
import RelatorioIconAtivo from "../../assets/relatorioAtivo.svg";

const HomeAdmin = () => {
  const [showPerfil, setShowPerfil] = useState(false);
  const [activeTab, setActiveTab] = useState("usuarios");
  const [searchIdUser, setSearchIdUser] = useState("");
  const [student, setStudent] = useState(null);

  useEffect(() => {
    document.title = "Home Administrativa - UPath";
  }, []);

  // 🔍 Simulação de busca de usuário
  const handlePesquisarUser = () => {
    if (searchIdUser === "11111111") {
      setStudent({
        nome: "Maurício Gabriel Almeida de Lima Jr",
        id: "11111111",
        status: "Ativo",
        ultimoLogin: "15/09/2025",
        resetPedido: false,
        foto: UserImg
      });
    } else {
      setStudent(null);
      alert("Usuário não encontrado!");
    }
  };

  // 🔹 Conteúdo dinâmico das abas
  const renderContent = () => {
    switch (activeTab) {
      case "usuarios":
        return (
          <ContentBox>
            <h1>Pesquisar Estudante</h1>
            <div className="pesquisa-estudante">
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Digite o ID do usuário..."
                  value={searchIdUser}
                  onChange={(e) => setSearchIdUser(e.target.value)}
                />
                <button onClick={handlePesquisarUser}>Pesquisar</button>
              </div>
            </div>


            {student && (
              <div className="card-estudante">
                <div className="info-principal">
                  <div className="dados">
                    <h3>{student.nome}</h3>
                    <p><strong>ID:</strong> {student.id}</p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className={student.status === "Ativo" ? "ativo" : "inativo"}>
                        {student.status}
                      </span>
                    </p>
                    <p><strong>Último Login:</strong> {student.ultimoLogin}</p>
                    <p>
                      <strong>Pedido de reset:</strong>{" "}
                      <span className={student.resetPedido ? "sim" : "nao"}>
                        {student.resetPedido ? "Sim" : "Não"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="acoes-estudante">
                  <button className="resetarUser" disabled>Resetar</button>
                  <button className="bloquearUser">Bloquear</button>
                  <button className="excluirUser">Excluir</button>
                </div>
              </div>
            )}
          </ContentBox>
        );

      case "relatorios":
        return (
          <ContentBox>
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
                    <div key={i} className="barra" style={{ height: `${valor * 2}px` }}></div>
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
          </ContentBox>
        );

      default:
        return null;
    }
  };


  return (
    <Container>
      <Header>
        <div className="logo">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
        </div>
        <h1>Painel Administrativo</h1>
        <UserArea>
          <div className="user-info">
            <h3>Maurício Gabriel</h3>
            <p>Administrador</p>
          </div>
          <img
            id="iconPerfil"
            src={AdminImg}
            alt="Perfil"
            onClick={() => setShowPerfil(!showPerfil)}
          />
        </UserArea>
      </Header>


      <NavBar>
        <NavButton active={activeTab === "usuarios"} onClick={() => setActiveTab("usuarios")}>
          <img src={activeTab === "usuarios" ? EstudanteIconAtivo : EstudanteIcon} alt="Usuários" />
          Gerenciar Usuários
        </NavButton>

        <NavButton active={activeTab === "relatorios"} onClick={() => setActiveTab("relatorios")}>
          <img src={activeTab === "relatorios" ? RelatorioIconAtivo : RelatorioIcon} alt="Relatórios" />
          Gerar Relatórios e Métricas
        </NavButton>
      </NavBar>


      <Main>{renderContent()}</Main>


      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a href="#">Contato</a> | <a href="#">Política de Privacidade</a> | <a href="#">Termos de Uso</a>
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