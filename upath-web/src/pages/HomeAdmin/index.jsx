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
  FormNotas,
  UploadArea,
  SuccessBox,
  ConfirmOverlay,
  ConfirmBox,
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
import AtualizarIcon from "../../assets/atualizar.svg";
import AtualizarIconAtivo from "../../assets/atualizarAtivo.svg";
import CursoBolsaIcon from "../../assets/cursoBolsa.svg";
import CursoBolsaIconAtivo from "../../assets/cursoBolsaAtivo.svg";
import RelatorioIcon from "../../assets/relatorio.svg";
import RelatorioIconAtivo from "../../assets/relatorioAtivo.svg";

const HomeAdmin = () => {
  const [showPerfil, setShowPerfil] = useState(false);
  const [activeTab, setActiveTab] = useState("usuarios");
  const [searchId, setSearchId] = useState("");
  const [student, setStudent] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  useEffect(() => {
    document.title = "Home Administrativa - UPath";
  }, []);

  // 🔍 Simulação de busca de usuário
  const handlePesquisarUser = () => {
    if (searchId === "11111111") {
      setStudent({
        nome: "Maurício Gabriel Almeida de Lima Jr",
        id: "11111111",
        status: "Ativo",
        testes: 2,
        simulacoes: 2,
        ultimoLogin: "15/09/2025",
        resetPedido: false,
        foto: UserImg
      });
    } else {
      setStudent(null);
      alert("Usuário não encontrado!");
    }
  };

  // 🔹 Estados das notas
  const [notasStage, setNotasStage] = useState("form");
  const [notas, setNotas] = useState({
    instituicao: "",
    curso: "",
    estado: "",
    modalidade: "",
    ano: "",
    nota: ""
  });

  // 🔹 Modal de confirmação
  const ConfirmModal = ({ onConfirm, onCancel }) => (
    <ConfirmOverlay>
      <ConfirmBox>
        <h3>Confirmar ação</h3>
        <p>Deseja realmente salvar esses dados?</p>
        <div className="botoes">
          <button className="confirmar" onClick={onConfirm}>
            Sim, salvar
          </button>
          <button className="cancelar" onClick={onCancel}>
            Cancelar
          </button>
        </div>
      </ConfirmBox>
    </ConfirmOverlay>
  );

  // 💾 Simula salvar notas
  const handleSalvarNotas = () => {
    setShowConfirmModal(false);
    setNotasStage("upload");
  };

  const handleUpload = () => {
    setNotasStage("success");
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
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
                <button onClick={handlePesquisarUser}>Pesquisar</button>
              </div>
            </div>

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
                  <button className="resetar" disabled>Resetar</button>
                  <button className="bloquear">Bloquear</button>
                  <button className="excluir">Excluir</button>
                </div>
              </div>
            )}
          </ContentBox>
        );

      case "notas":
        return (
          <ContentBox>
            {notasStage === "form" && (
              <>
                <h1>Inserir Dados para Atualização</h1>
                <FormNotas onSubmit={(e) => { e.preventDefault(); setShowConfirmModal(true); }}>
                  <input type="text" placeholder="Instituição" value={notas.instituicao} onChange={(e) => setNotas({ ...notas, instituicao: e.target.value })} required />
                  <input type="text" placeholder="Curso" value={notas.curso} onChange={(e) => setNotas({ ...notas, curso: e.target.value })} required />
                  <input type="text" placeholder="Estado" value={notas.estado} onChange={(e) => setNotas({ ...notas, estado: e.target.value })} required />
                  <input type="text" placeholder="Modalidade" value={notas.modalidade} onChange={(e) => setNotas({ ...notas, modalidade: e.target.value })} required />
                  <input type="number" placeholder="Ano" value={notas.ano} onChange={(e) => setNotas({ ...notas, ano: e.target.value })} required />
                  <input type="number" step="0.01" placeholder="Nota de Corte" value={notas.nota} onChange={(e) => setNotas({ ...notas, nota: e.target.value })} required />
                  <button type="submit">Salvar</button>
                </FormNotas>
              </>
            )}

            {notasStage === "upload" && (
              <UploadArea>
                <h2>Upload de Dados</h2>
                <div className="resumo">
                  <p><strong>Instituição:</strong> {notas.instituicao}</p>
                  <p><strong>Curso:</strong> {notas.curso}</p>
                  <p><strong>Estado:</strong> {notas.estado}</p>
                  <p><strong>Modalidade:</strong> {notas.modalidade}</p>
                  <p><strong>Ano:</strong> {notas.ano}</p>
                  <p><strong>Nota de Corte:</strong> {notas.nota}</p>
                </div>
                <button onClick={handleUpload}>Fazer Upload</button>
              </UploadArea>
            )}

            {notasStage === "success" && (
              <SuccessBox>
                <h2>Tudo pronto!</h2>
                <p>Agora as simulações passam a usar os novos dados.</p>
                <button onClick={() => {
                  setNotas({
                    instituicao: "",
                    curso: "",
                    estado: "",
                    modalidade: "",
                    ano: "",
                    nota: ""
                  });
                  setNotasStage("form");
                }}>Atualizar Nota de Corte</button>
              </SuccessBox>
            )}

            {showConfirmModal && (
              <ConfirmModal
                onConfirm={handleSalvarNotas}
                onCancel={() => setShowConfirmModal(false)}
              />
            )}

            <div className="info-final">
              <p className="ultima-atualizacao">
                Última atualização: 25/10/2025 às 10:25 - Maurício Gabriel
              </p>
            </div>
          </ContentBox>
        );

      case "cursos":
        return (
          <ContentBox>
            <h1>Gerenciar Cursos e Bolsas</h1>
            <p>Adicione, edite ou remova cursos e bolsas disponíveis.</p>
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
                  <p>Selecione os parâmetros e exporte em PDF ou XLSX.</p>
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

                <div className="checkbox-group">
                <label>
                  <input id="checkDadosCursos" type="checkbox" />
                  Cursos 
                </label>
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
                <div className="periodo-info">
                  <h3>Período:</h3>
                  <p>Últimos 30 dias</p>
                </div>
                <div className="toggle-area"> 
                  <label className="switch">
                    <input id="switchAtivarDadosSensiveis" type="checkbox" />
                    <span className="slider"></span>
                  </label>
                  <label htmlFor="switchAtivarDadosSensiveis" className="dados-active">Anonimizar dados sensíveis</label>
                </div>
                <div className="export-buttons">
                  <button className="pdf" id="buttonExportarPDF">Exportar PDF</button>
                  <button className="xlsx" id="buttonExportarXLSX">Exportar XLSX</button>
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

        <NavButton active={activeTab === "notas"} onClick={() => setActiveTab("notas")}>
          <img src={activeTab === "notas" ? AtualizarIconAtivo : AtualizarIcon} alt="Notas" />
          Atualizar Notas de Corte
        </NavButton>

        <NavButton active={activeTab === "cursos"} onClick={() => setActiveTab("cursos")}>
          <img src={activeTab === "cursos" ? CursoBolsaIconAtivo : CursoBolsaIcon} alt="Cursos" />
          Gerenciar Cursos e Bolsas
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
