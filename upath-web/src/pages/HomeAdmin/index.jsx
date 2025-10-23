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
  ContentBox
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import AdminImg from "../../assets/adminImg.svg";
import UserImg from "../../assets/userImg.svg";
import LogoutIcon from "../../assets/logout.svg";
import EstudanteIcon from "../../assets/estudante.svg";
import EstudanteIconAtivo from "../../assets/estudanteAtivo.svg";
import AtualizarIcon from "../../assets/atualizar.svg";
import AtualizarIconAtivo from "../../assets/atualizarAtivo.svg";
import CursoBolsaIcon from "../../assets/cursoBolsa.svg";
import CursoBolsaIconAtivo from "../../assets/cursoBolsaAtivo.svg";
import RelatorioIcon from "../../assets/relatorio.svg";
import RelatorioIconAtivo from "../../assets/relatorioAtivo.svg";


const HomeAdmin = () => {
  const [showPerfil, setShowPerfil] = useState(false);
  const [activeTab, setActiveTab] = useState("usuarios");
  const [searchId, setSearchId] = useState(""); // ID digitado
  const [student, setStudent] = useState(null); // dados do aluno encontrado

  useEffect(() => {
    document.title = "Home Administrativa - UPath";
  }, []);

  // 🧠 Função simulada de pesquisa
  const handlePesquisar = () => {
    // Exemplo de dado fixo (simulação)
    if (searchId === "11111111") {
      setStudent({
        nome: "Maurício Gabriel Almeida de Lima Jr",
        id: "11111111",
        status: "Ativo",
        testes: 2,
        simulacoes: 2,
        ultimoLogin: "15/09/2025",
        resetPedido: false,
        foto: UserImg,
      });
    } else {
      setStudent(null);
      alert("Usuário não encontrado!");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "usuarios":
        return (
          <ContentBox>
            <h1>Gerenciar Usuários</h1>
            <p>Pesquise um estudante pelo ID para visualizar ou editar suas informações.</p>

            <div className="pesquisa-estudante">
              <h3>Pesquisar Estudante</h3>
              <div className="input-area">
                <input
                  type="text"
                  id="inputPesquisarUser"
                  placeholder="Digite o ID do usuário..."
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
                <button id="buttonPesquisarUser" onClick={handlePesquisar}>
                  Pesquisar
                </button>
              </div>
            </div>

            {/* 🎯 Mostra o card se o estudante foi encontrado */}
            {student && (
              <div className="card-estudante">
                <div className="info-principal">
                  <img src={student.foto} alt="Foto do estudante" />
                  <div className="dados">
                    <h3>{student.nome}</h3>
                    <p><strong>ID:</strong> {student.id}</p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span className={student.status === "Ativo" ? "ativo" : "inativo"}>
                        {student.status}
                      </span>
                    </p>
                    <p><strong>Testes:</strong> {student.testes}</p>
                    <p><strong>Simulações:</strong> {student.simulacoes}</p>
                    <p><strong>Último Login:</strong> {student.ultimoLogin}</p>
                    <p>
                      <strong>Pedido de reset:</strong>{" "}
                      <span className={student.resetPedido ? "sim" : "nao"}>
                        {student.resetPedido ? "Sim" : "Não"}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="acoes">
                  <button className="resetar" id="buttonResetarUser" disabled>Resetar</button>
                  <button className="bloquear" id="buttonBloquearUser">Bloquear</button>
                  <button className="excluir" id="buttonExcluirUser">Excluir</button>
                </div>
              </div>
            )}
          </ContentBox>
        );
      case "notas":
        return <ContentBox><h1>Atualizar Notas de Corte</h1><p>Atualize as notas de corte dos cursos cadastrados.</p></ContentBox>;
      case "cursos":
        return <ContentBox><h1>Gerenciar Cursos e Bolsas</h1><p>Adicione, edite ou remova cursos e bolsas disponíveis.</p></ContentBox>;
      case "relatorios":
        return <ContentBox><h1>Gerar Relatórios e Métricas</h1><p>Visualize métricas e gere relatórios administrativos.</p></ContentBox>;
      default:
        return null;
    }
  };

  return (
    <Container>
      {/* Cabeçalho */}
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

      {/* Barra de navegação */}
      <NavBar>
        <NavButton
          active={activeTab === "usuarios"}
          onClick={() => setActiveTab("usuarios")}
        >
          <img
            src={activeTab === "usuarios" ? EstudanteIconAtivo : EstudanteIcon}
            alt="Usuários"
          />
          Gerenciar Usuários
        </NavButton>

        <NavButton
          active={activeTab === "notas"}
          onClick={() => setActiveTab("notas")}
        >
          <img
            src={activeTab === "notas" ? AtualizarIconAtivo : AtualizarIcon}
            alt="Notas"
          />
          Atualizar Notas de Corte
        </NavButton>

        <NavButton
          active={activeTab === "cursos"}
          onClick={() => setActiveTab("cursos")}
        >
          <img
            src={activeTab === "cursos" ? CursoBolsaIconAtivo : CursoBolsaIcon}
            alt="Cursos"
          />
          Gerenciar Cursos e Bolsas
        </NavButton>

        <NavButton
          active={activeTab === "relatorios"}
          onClick={() => setActiveTab("relatorios")}
        >
          <img
            src={activeTab === "relatorios" ? RelatorioIconAtivo : RelatorioIcon}
            alt="Relatórios"
          />
          Gerar Relatório e Métricas
        </NavButton>
      </NavBar>


      {/* Conteúdo principal dinâmico */}
      <Main>{renderContent()}</Main>

      {/* Rodapé */}
      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a href="#">Contato</a> | <a href="#">Política de Privacidade</a> |{" "}
          <a href="#">Termos de Uso</a>
        </div>
      </Footer>

      {/* Modal Perfil */}
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
