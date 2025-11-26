import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  NavLinks,
  UserArea,
  Main,
  CardSimulacao,
  Linha,
  Campo,
  Divider,
  BotaoSimular,
  ResultadoBox,
  Footer,
  ModalOverlay,
  ModalNotificacoes,
  ModalLinkNotificacoes,
  ModalConfig,
  ModalPerfil,
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import BellIcon from "../../assets/notification.svg";
import BellIconActived from "../../assets/notification-actived.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import BolsaIcon from "../../assets/bolsas.svg";
import NotaIcon from "../../assets/notas.svg";
import CursoIcon from "../../assets/cursos.svg";
import ConfigIcon from "../../assets/config.svg";
import ConfigIcon2 from "../../assets/config-2.svg";
import EditIcon from "../../assets/edit.svg";
import SobreIcon from "../../assets/sobre.svg";
import LogoutIcon from "../../assets/logout.svg";
import { Link } from "react-router-dom";

const Teste = () => {
  // Estados dos modais
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [showLinkNotificacoes, setShowLinkNotificacoes] = useState(false);
  const [tipoNotificacao, setTipoNotificacao] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

  const [userNome, setUserNome] = useState("");

  const primeiroNome = userNome.split(" ")[0];

  useEffect(() => {
    document.title = "Simulação - UPath";
    const nome = localStorage.getItem("userNome");
    if (nome) {
      setUserNome(nome);
    }
  }, []);

  // Estados da simulação
  const [curso, setCurso] = useState("ENFERMAGEM");
  const [nota, setNota] = useState("");
  const [resultado, setResultado] = useState(null);

  // Função de envio para API
  function enviar() {
    if (!nota) {
      alert("Por favor, digite sua nota!");
      return;
    }

    fetch("http://localhost:3000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ curso, nota: parseFloat(nota) }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResultado({
          curso,
          nota,
          probabilidade: data.probabilidade,
          status: data.status,
        });
      })
      .catch((err) => {
        alert("Erro ao conectar ao servidor.");
        console.error(err);
      });
  }

  // Estado do link ativo
  const [activeLink, setActiveLink] = useState("simulacao");

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="logo">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
        </div>
        <NavLinks>
          <Link
            id="linkHome"
            to="/homeUser"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>
          <Link
            id="linkTeste"
            to="/teste"
            className={activeLink === "teste" ? "active" : ""}
            onClick={() => setActiveLink("teste")}
          >
            Teste
          </Link>
          <Link
            id="linkSimulacao"
            to="/simulacao"
            className={activeLink === "simulacao" ? "active" : ""}
            onClick={() => setActiveLink("simulacao")}
          >
            Simulação
          </Link>
        </NavLinks>

        <UserArea>
          <button
            id="iconNotificacoes"
            onClick={() => {
              setShowNotificacoes(!showNotificacoes);
              setShowPerfil(false);
              setShowLinkNotificacoes(false);
              setShowConfig(false);
            }}
          >
            <img
              src={showNotificacoes ? BellIconActived : BellIcon}
              alt="Notificações"
            />
          </button>
          <div className="user-info">
            <h3>{primeiroNome}</h3>
            <p>Estudante</p>
          </div>
          <img
            id="iconPerfil"
            src={DefaultAvatar}
            alt="Perfil"
            onClick={() => {
              setShowPerfil(!showPerfil);
              setShowNotificacoes(false);
              setShowLinkNotificacoes(false);
              setShowConfig(false);
            }}
          />
        </UserArea>
      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <h3>Simulação de Ingresso</h3>
        <CardSimulacao>
          <Linha>
            <Campo>
              <label>Curso:</label>
              <select value={curso} onChange={(e) => setCurso(e.target.value)}>
                <option value="" disabled>
                  Selecione
                </option>
                <option value="ENFERMAGEM">Enfermagem</option>
                <option value="MEDICINA">Medicina</option>
                <option value="FISIOTERAPIA">Fisioterapia</option>
                <option value="DIREITO">Direito</option>
                <option value="ADMINISTRACAO">Administração</option>
                <option value="SISTEMAS DE INFORMACAO">
                  Sistemas de Informação
                </option>
                <option value="CIENCIA DA COMPUTACAO">
                  Ciência da Computação
                </option>
                <option value="PSICOLOGIA">Psicologia</option>
              </select>
            </Campo>

            <Campo>
              <label>Nota do ENEM:</label>
              <input
                type="number"
                placeholder="Digite sua nota..."
                value={nota}
                onChange={(e) => setNota(e.target.value)}
              />
              <Divider />
            </Campo>
          </Linha>

          <BotaoSimular onClick={enviar}>Simular Agora</BotaoSimular>

          {/* RESULTADO ABAIXO */}
          {resultado && (
            <ResultadoBox>
              <strong>Resultado:</strong>
              <br />
              <br />
              Curso: {curso}
              <br />
              Nota: {nota}
              <br />
              <br />
              <strong>Probabilidade de Aprovação:</strong>{" "}
              {resultado.probabilidade}%
              <br />
              <br />
              <strong>Status:</strong> {resultado.status}
            </ResultadoBox>
          )}
        </CardSimulacao>
      </Main>

      {/* Rodapé */}
      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a id="linkContato" href="#">
            Contato
          </a>{" "}
          |
          <a id="linkPolitica" href="#">
            Política de Privacidade
          </a>{" "}
          |
          <a id="linkTermo" href="#">
            Termos de Uso
          </a>
        </div>
      </Footer>

      {/* MODAL Notificações */}
      {showNotificacoes && (
        <ModalOverlay>
          <ModalNotificacoes id="modalNotificacoes">
            <button
              id="buttonNotificacoesBolsas"
              onClick={() => {
                setTipoNotificacao("bolsa");
                setShowLinkNotificacoes(true);
                setShowNotificacoes(false);
              }}
            >
              <div className="icon-bolsa">
                <img src={BolsaIcon} alt="Bolsas" />
                Novas bolsas disponíveis
              </div>
            </button>

            <button
              id="buttonNotificacoesNotas"
              onClick={() => {
                setTipoNotificacao("nota");
                setShowLinkNotificacoes(true);
                setShowNotificacoes(false);
              }}
            >
              <div className="icon-nota">
                <img src={NotaIcon} alt="Notas" />
                Atualizações nas notas de corte
              </div>
            </button>

            <button
              id="buttonNotificacoesCursos"
              onClick={() => {
                setTipoNotificacao("curso");
                setShowLinkNotificacoes(true);
                setShowNotificacoes(false);
              }}
            >
              <div className="icon-curso">
                <img src={CursoIcon} alt="Cursos" />
                Novos cursos adicionados
              </div>
            </button>

            <button
              id="buttonConfig"
              onClick={() => {
                setShowConfig(true);
                setShowNotificacoes(false);
              }}
            >
              <img src={ConfigIcon} alt="Configurações" />
            </button>
          </ModalNotificacoes>
        </ModalOverlay>
      )}

      {/* MODAL Links de Notificações */}
      {showLinkNotificacoes && (
        <ModalOverlay>
          <ModalLinkNotificacoes id="modalLinkNotificacoes">
            <div className="modal-header">
              <button
                id="iconVoltar"
                onClick={() => {
                  setShowLinkNotificacoes(false);
                  setShowNotificacoes(true);
                }}
              >
                <img src={VoltarIcon} alt="Voltar" />
              </button>
              <h3>
                {tipoNotificacao === "bolsa" && "Atualizações de Bolsa"}
                {tipoNotificacao === "nota" && "Atualizações de Nota"}
                {tipoNotificacao === "curso" && "Atualizações de Curso"}
              </h3>
            </div>
            {/* CONTEÚDO DAS NOTIFICAÇÕES */}
            <div className="notificacoes-container">
              {tipoNotificacao === "bolsa" && (
                <>
                  <a
                    id="linkNotificacoesBolsas"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-bolsaLink">
                      <img src={BolsaIcon} alt="Bolsas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Nova atualização do SiSU!</h4>
                      <p>
                        As notas de corte foram atualizadas. Confira sua posição
                        agora.
                      </p>
                      <span>há 1 min</span>
                    </div>
                  </a>

                  <a
                    id="linkNotificacoesBolsas"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-bolsaLink">
                      <img src={BolsaIcon} alt="Bolsas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Oportunidade no SiSU</h4>
                      <p>
                        Uma nova vaga pode estar ao seu alcance. Veja os
                        detalhes.
                      </p>
                      <span>há 1 dia</span>
                    </div>
                  </a>

                  <a
                    id="linkNotificacoesBolsas"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-bolsaLink">
                      <img src={BolsaIcon} alt="Bolsas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Atualização personalizada</h4>
                      <p>
                        Com base no seu perfil, há novidades no SiSU que podem
                        te interessar.
                      </p>
                      <span>há 1 sem</span>
                    </div>
                  </a>
                </>
              )}

              {tipoNotificacao === "nota" && (
                <>
                  <a
                    id="linkNotificacoesNotas"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-notaLink">
                      <img src={NotaIcon} alt="Notas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Notas de corte atualizadas!</h4>
                      <p>
                        Confira como sua posição mudou nas universidades que
                        você escolheu.
                      </p>
                      <span>há 2 min</span>
                    </div>
                  </a>

                  <a
                    id="linkNotificacoesNotas"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-notaLink">
                      <img src={NotaIcon} alt="Notas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Nova média parcial</h4>
                      <p>
                        Suas chances foram recalculadas com base nas notas mais
                        recentes.
                      </p>
                      <span>há 5 h</span>
                    </div>
                  </a>
                </>
              )}

              {tipoNotificacao === "curso" && (
                <>
                  <a
                    id="linkNotificacoesCursos"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-cursoLink">
                      <img src={CursoIcon} alt="Cursos" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Novos cursos disponíveis</h4>
                      <p>
                        Veja as novas opções de graduação que acabaram de ser
                        adicionadas.
                      </p>
                      <span>há 3 h</span>
                    </div>
                  </a>

                  <a
                    id="linkNotificacoesCursos"
                    href="#"
                    className="notificacao-card"
                  >
                    <div className="icon-cursoLink">
                      <img src={CursoIcon} alt="Cursos" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Atualização de grade</h4>
                      <p>
                        Alguns cursos tiveram mudanças nas disciplinas e
                        horários.
                      </p>
                      <span>há 2 dias</span>
                    </div>
                  </a>
                </>
              )}
            </div>
          </ModalLinkNotificacoes>
        </ModalOverlay>
      )}

      {/* MODAL Configurações */}
      {showConfig && (
        <ModalOverlay>
          <ModalConfig id="modalConfig">
            <div className="modal-header">
              <button
                id="iconVoltar"
                onClick={() => {
                  setShowConfig(false);
                  setShowNotificacoes(true);
                }}
              >
                <img src={VoltarIcon} alt="Voltar" />
              </button>
              <h3>Configurações</h3>
              <img src={ConfigIcon2} alt="Configurações" />
            </div>

            <div className="section">
              <div className="toggle-area">
                <label
                  htmlFor="switchAtivarNotificacoes"
                  className="nots-active"
                >
                  Ativar Notificações
                </label>
                <label className="switch">
                  <input id="switchAtivarNotificacoes" type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="checkbox-group">
                <label>
                  Atualizações das bolsas{" "}
                  <input id="checkBolsas" type="checkbox" />
                </label>
                <label>
                  Atualizações das notas{" "}
                  <input id="checkNotas" type="checkbox" />
                </label>
                <label>
                  Atualizações dos cursos{" "}
                  <input id="checkCursos" type="checkbox" />
                </label>
              </div>

              <div className="filter-group">
                <span>Filtrar por:</span>
                <select id="filterArea">
                  <option>Tecnologia</option>
                  <option>Exatas</option>
                  <option>Linguagens</option>
                  <option>Saúde</option>
                  <option>Humanas</option>
                </select>
              </div>

              <div className="checkbox-group">
                <label>
                  Notificações preferenciais{" "}
                  <input id="checkNotificacoesPref" type="checkbox" />
                </label>
              </div>

              <div className="filter-group">
                <span>Filtrar por:</span>
                <select id="filterModalidade">
                  <option>SISU</option>
                  <option>Prouni</option>
                  <option>Outros</option>
                </select>
              </div>
            </div>
          </ModalConfig>
        </ModalOverlay>
      )}

      {/* MODAL Perfil */}
      {showPerfil && (
        <ModalOverlay className="modalPerfilOverlay">
          <ModalPerfil id="modalPerfil">
            <Link to="/perfil">
              <button id="buttonEditPerfil">
                <div className="icon-edit">
                  <img src={EditIcon} alt="Editar" /> Editar Perfil
                </div>
              </button>
            </Link>
            <Link to="/sobre">
              <button id="buttonSobreNos">
                <div className="icon-sobre">
                  <img src={SobreIcon} alt="Sobre Nós" />
                  Sobre Nós
                </div>
              </button>
            </Link>
            <Link to="/login">
              <button id="buttonSair">
                <div className="icon-logout">
                  <img src={LogoutIcon} alt="Log Out" />
                  Log Out
                </div>
              </button>
            </Link>
          </ModalPerfil>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Teste;
