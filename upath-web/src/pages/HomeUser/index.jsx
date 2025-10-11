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
import VoltarIcon from "../../assets/seta-voltar.svg";
import BolsaIcon from "../../assets/bolsas.svg";
import NotaIcon from "../../assets/notas.svg";
import CursoIcon from "../../assets/cursos.svg";
import ConfigIcon from "../../assets/config.svg";

export default function HomeUser() {
  // Estados dos modais
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [showLinkNotificacoes, setShowLinkNotificacoes] = useState(false);
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
        imagem: { Sisu },
      },
      {
        id: 2,
        titulo: "UFPE lança curso de Design Digital",
        descricao:
          "Graduação voltada para inovação, tecnologia e criatividade.",
        imagem: { UFPE },
      },
      {
        id: 3,
        titulo: "UFRPE apresenta Eng. de Software",
        descricao:
          "Curso com foco em programação, projetos e desenvolvimento ágil.",
        imagem: { UFRPE },
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
          <a id="linkHome" href="#" className={activeLink === "home" ? "active" : ""} onClick={() => setActiveLink("home")}>Home</a>
          <a id="linkTeste" href="#" className={activeLink === "teste" ? "active" : ""} onClick={() => setActiveLink("teste")}>Teste</a>
          <a id="linkResultados" href="#" className={activeLink === "resultados" ? "active" : ""} onClick={() => setActiveLink("resultados")}>Resultados</a>
        </NavLinks>

        <UserArea>
          <button
            id="iconNotificacoes"
            onClick={() => setShowNotificacoes(true)}
          ><img src={BellIcon} alt="Notificações" />
          </button>
          <div className="user-info"><h3>Maurício Gabriel Jr</h3>
            <p>Estudante</p></div>
          <img
            id="iconPerfil"
            src={UserImg}
            alt="Perfil"
            onClick={() => setShowPerfil(true)}
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
            <ButtonEscolherTeste id="buttonEscolherTeste">
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
            <div className="modal-header">
              <button id="iconVoltar" onClick={() => setShowNotificacoes(false)}>
                <img src={VoltarIcon} alt="Voltar" />
              </button>
              <h3>Notificações</h3>
            </div>
            <button
              id="buttonNotificacoesBolsas"
              onClick={() => setShowLinkNotificacoes(true)}
            >
              <div className="icon-bolsa"><img src={BolsaIcon} alt="Bolsas" />
                Novas bolsas disponíveis</div>
            </button>
            <button
              id="buttonNotificacoesNotas"
              onClick={() => setShowLinkNotificacoes(true)}
            >
              <div className="icon-nota"><img src={NotaIcon} alt="Notas" />
                Atualizações nas notas de corte</div>
            </button>
            <button
              id="buttonNotificacoesCursos"
              onClick={() => setShowLinkNotificacoes(true)}
            >
              <div className="icon-curso"><img src={CursoIcon} alt="Cursos" />
                Novos cursos adicionados</div>
            </button>
            <button id="buttonConfig" onClick={() => setShowConfig(true)}>
              <img src={ConfigIcon} alt="Configurações" />
            </button>
          </ModalNotificacoes>
        </ModalOverlay>
      )}

      {/* MODAL Links de Notificações */}
      {showLinkNotificacoes && (
        <ModalOverlay>
          <ModalLinkNotificacoes id="modalLinkNotificacoes">
            <div className="modal-header"><button id="iconVoltar" onClick={() => setShowLinkNotificacoes(false)}>
              <img src={VoltarIcon} alt="Voltar" />
            </button>
              <h3>Atualizações de bolsa</h3></div>
            <a id="linkNotificacoesBolsas" href="#">Bolsas</a>
            <a id="linkNotificacoesNotas" href="#">Notas de Corte</a>
            <a id="linkNotificacoesCursos" href="#">Cursos</a>
          </ModalLinkNotificacoes>
        </ModalOverlay>
      )}

      {/* MODAL Configurações */}
      {showConfig && (
        <ModalOverlay>
          <ModalConfig id="modalConfig">
            <div className="modal-header"><button id="iconVoltar" onClick={() => setShowConfig(false)}>
              <img src={VoltarIcon} alt="Voltar" />
            </button>
              <h3>Configurações</h3></div>
            <label>
              <input id="switchAtivarNotificacoes" type="checkbox" /> Ativar notificações
            </label>
            <label>
              <input id="checkBolsas" type="checkbox" /> Atualizações de Bolsas
            </label>
            <label>
              <input id="checkNotas" type="checkbox" /> Atualizações de Notas
            </label>
            <label>
              <input id="checkCursos" type="checkbox" /> Atualizações de Cursos
            </label>
          </ModalConfig>
        </ModalOverlay>
      )}

      {/* MODAL Perfil */}
      {showPerfil && (
        <ModalOverlay>
          <ModalPerfil id="modalPerfil">
            <button id="buttonEditPerfil">Editar Perfil</button>
            <button id="buttonSalvos">Salvos</button>
            <button id="buttonPlanos">Planos</button>
            <button id="buttonSobreNos">Sobre Nós</button>
            <button id="buttonSair">Log Out</button>
            
          </ModalPerfil>
        </ModalOverlay>
      )}
    </Container>
  );
}
