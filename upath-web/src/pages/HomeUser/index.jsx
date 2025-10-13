import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  NavLinks,
  UserArea,
  Main,
  WelcomeSection,
  ButtonEscolherTeste,
  NoticiasSection,
  CardNoticias,
  Footer,
  ModalOverlay,
  ModalNotificacoes,
  ModalLinkNotificacoes,
  ModalConfig,
  ModalPerfil
} from "./styles";

import EquipeUPathImg from "../../assets/EquipeUPath.png";
import Sisu from "../../assets/sisu.png";
import UFPE from "../../assets/ufpe.jpg";
import UFRPE from "../../assets/ufrpe.jpeg";
import Logo from "../../assets/logo-upath-2.svg";
import UserImg from "../../assets/userImg.svg";
import BellIcon from "../../assets/notification.svg";
import BellIconActived from "../../assets/notification-actived.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import BolsaIcon from "../../assets/bolsas.svg";
import NotaIcon from "../../assets/notas.svg";
import CursoIcon from "../../assets/cursos.svg";
import ConfigIcon from "../../assets/config.svg";
import ConfigIcon2 from "../../assets/config-2.svg";
import EditIcon from "../../assets/edit.svg";
import SalvosIcon from "../../assets/salvos.svg";
import PlanosIcon from "../../assets/planos.svg";
import SobreIcon from "../../assets/sobre.svg";
import LogoutIcon from "../../assets/logout.svg";

export default function HomeUser() {
  // Estados dos modais
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [showLinkNotificacoes, setShowLinkNotificacoes] = useState(false);
  const [tipoNotificacao, setTipoNotificacao] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

  useEffect(() => {
    document.title = "Home - UPath";
  }, []);

  // Estado do link ativo
  const [activeLink, setActiveLink] = useState("home");
  // Estado das notícias
  const [noticias, setNoticias] = useState([]);

  // Simulação de fetch de notícias
  useEffect(() => {
    const noticiasExemplo = [
      {
        id: 1,
        titulo: "Inscrições do SISU 2025 abertas",
        descricao:
          "Prazo vai de 10 a 15 de fevereiro para universidades públicas de todo o país.",
        imagem: Sisu, // ✅ sem { }
      },
      {
        id: 2,
        titulo: "UFPE lança curso de Design Digital",
        descricao:
          "Graduação voltada para inovação, tecnologia e criatividade.",
        imagem: UFPE, // ✅ sem { }
      },
      {
        id: 3,
        titulo: "UFRPE apresenta Eng. de Software",
        descricao:
          "Curso com foco em programação, projetos e desenvolvimento ágil.",
        imagem: UFRPE, // ✅ sem { }
      },
    ];
    setNoticias(noticiasExemplo);
  }, []);

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="logo">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
        </div>
        <NavLinks>
          <a id="linkHome" to="/homeUser" href="#" className={activeLink === "home" ? "active" : ""} onClick={() => setActiveLink("home")}>Home</a>
          <a id="linkTeste" to="/typeTest" href="#" className={activeLink === "teste" ? "active" : ""} onClick={() => setActiveLink("teste")}>Teste</a>
          <a id="linkResultados" to="/results" href="#" className={activeLink === "resultados" ? "active" : ""} onClick={() => setActiveLink("resultados")}>Resultados</a>
        </NavLinks>

        <UserArea>
          <button
            id="iconNotificacoes"
            onClick={() => {
              setShowNotificacoes(!showNotificacoes);
              setShowPerfil(false);
              setShowLinkNotificacoes(false);
              setShowConfig(false);
            }
            }
          >
            <img
              src={showNotificacoes ? BellIconActived : BellIcon}
              alt="Notificações"
            />
          </button>
          <div className="user-info"><h3>Maurício Gabriel Jr</h3>
            <p>Estudante</p></div>
          <img
            id="iconPerfil"
            src={UserImg}
            alt="Perfil"
            onClick={() => {
              setShowPerfil(!showPerfil);
              setShowNotificacoes(false);
              setShowLinkNotificacoes(false);
              setShowConfig(false);
            }
            }
          />
        </UserArea>
      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <WelcomeSection>
          <img src={EquipeUPathImg} alt="Equipe UPath" />
          <div>
            <h2>Bem-vindo ao UPath!</h2>
            <p>
              Realize o teste de orientação vocacional para identificar a área
              que mais se alinha ao seu perfil.
            </p>
            <p>
              Nossa plataforma analisará suas chances em programas como Sisu,
              ProUni e Fies, além de sugerir cursos e instituições compatíveis.
            </p>
            <ButtonEscolherTeste id="buttonEscolherTeste" to="/typeTest">
              Iniciar Teste
            </ButtonEscolherTeste>
          </div>

        </WelcomeSection>

        <NoticiasSection>
          <h3>Notícias</h3>
          <div className="cards-container">
            {noticias.map((n) => (
              <CardNoticias key={n.id}>
                <img src={n.imagem} alt={n.titulo} />
                <h4>{n.titulo}</h4>
                <p>{n.descricao}</p>
              </CardNoticias>
            ))}
          </div>
        </NoticiasSection>
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
                  <a id="linkNotificacoesBolsas" href="#" className="notificacao-card">
                    <div className="icon-bolsaLink">
                      <img src={BolsaIcon} alt="Bolsas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Nova atualização do SiSU!</h4>
                      <p>As notas de corte foram atualizadas. Confira sua posição agora.</p>
                      <span>há 1 min</span>
                    </div>
                  </a>

                  <a id="linkNotificacoesBolsas" href="#" className="notificacao-card">
                    <div className="icon-bolsaLink">
                      <img src={BolsaIcon} alt="Bolsas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Oportunidade no SiSU</h4>
                      <p>Uma nova vaga pode estar ao seu alcance. Veja os detalhes.</p>
                      <span>há 1 dia</span>
                    </div>
                  </a>

                  <a id="linkNotificacoesBolsas" href="#" className="notificacao-card">
                    <div className="icon-bolsaLink">
                      <img src={BolsaIcon} alt="Bolsas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Atualização personalizada</h4>
                      <p>Com base no seu perfil, há novidades no SiSU que podem te interessar.</p>
                      <span>há 1 sem</span>
                    </div>
                  </a>
                </>
              )}

              {tipoNotificacao === "nota" && (
                <>
                  <a id="linkNotificacoesNotas" href="#" className="notificacao-card">
                    <div className="icon-notaLink">
                      <img src={NotaIcon} alt="Notas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Notas de corte atualizadas!</h4>
                      <p>Confira como sua posição mudou nas universidades que você escolheu.</p>
                      <span>há 2 min</span>
                    </div>
                  </a>

                  <a id="linkNotificacoesNotas" href="#" className="notificacao-card">
                    <div className="icon-notaLink">
                      <img src={NotaIcon} alt="Notas" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Nova média parcial</h4>
                      <p>Suas chances foram recalculadas com base nas notas mais recentes.</p>
                      <span>há 5 h</span>
                    </div>
                  </a>
                </>
              )}

              {tipoNotificacao === "curso" && (
                <>
                  <a id="linkNotificacoesCursos" href="#" className="notificacao-card">
                    <div className="icon-cursoLink">
                      <img src={CursoIcon} alt="Cursos" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Novos cursos disponíveis</h4>
                      <p>Veja as novas opções de graduação que acabaram de ser adicionadas.</p>
                      <span>há 3 h</span>
                    </div>
                  </a>

                  <a id="linkNotificacoesCursos" href="#" className="notificacao-card">
                    <div className="icon-cursoLink">
                      <img src={CursoIcon} alt="Cursos" />
                    </div>
                    <div className="notificacao-info">
                      <h4>Atualização de grade</h4>
                      <p>Alguns cursos tiveram mudanças nas disciplinas e horários.</p>
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
                <label htmlFor="switchAtivarNotificacoes" className="nots-active">Ativar Notificações</label>
                <label className="switch">
                  <input id="switchAtivarNotificacoes" type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="checkbox-group">
                <label>
                  Atualizações das bolsas <input id="checkBolsas" type="checkbox" />
                </label>
                <label>
                  Atualizações das notas <input id="checkNotas" type="checkbox" />
                </label>
                <label>
                  Atualizações dos cursos <input id="checkCursos" type="checkbox" />
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
                  Notificações preferenciais <input id="checkNotificacoesPref" type="checkbox" />
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
            <button id="buttonEditPerfil">
              <div className="icon-edit">
                <img src={EditIcon} alt="Editar" />Editar Perfil
              </div>
            </button>
            <button id="buttonSalvos">
              <div className="icon-salvos">
                <img src={SalvosIcon} alt="Salvos" />Salvos
              </div>
            </button>
            <button id="buttonPlanos">
              <div className="icon-planos">
                <img src={PlanosIcon} alt="Planos" />Planos
              </div>
            </button>
            <button id="buttonSobreNos">
              <div className="icon-sobre">
                <img src={SobreIcon} alt="Sobre Nós" />Sobre Nós
              </div>
            </button>
            <button id="buttonSair">
              <div className="icon-logout">
                <img src={LogoutIcon} alt="Log Out" />Log Out
              </div>
            </button>

          </ModalPerfil>
        </ModalOverlay>
      )}
    </Container>
  );
}
