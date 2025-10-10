import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Logo,
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

export default function HomeUser() {
  // Estados dos modais
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [showLinkNotificacoes, setShowLinkNotificacoes] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

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
        imagem: "/images/sisu.jpg",
      },
      {
        id: 2,
        titulo: "UFPE lança curso de Design Digital",
        descricao:
          "Graduação voltada para inovação, tecnologia e criatividade.",
        imagem: "/images/design.jpg",
      },
      {
        id: 3,
        titulo: "UFRPE apresenta Eng. de Software",
        descricao:
          "Curso com foco em programação, projetos e desenvolvimento ágil.",
        imagem: "/images/software.jpg",
      },
    ];
    setNoticias(noticiasExemplo);
  }, []);

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <Logo>UPath</Logo>
        <NavLinks>
          <a id="linkHome" href="#">Home</a>
          <a id="llinkTeste" href="#">Teste</a>
          <a id="linkResultados" href="#">Resultados</a>
        </NavLinks>

        <UserArea>
          <button
            id="iconNotificacoes"
            onClick={() => setShowNotificacoes(true)}
          >
            🔔
          </button>
          <img
            id="iconPerfil"
            src="/images/user.png"
            alt="Perfil"
            onClick={() => setShowPerfil(true)}
          />
        </UserArea>
      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <WelcomeSection>
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
          <img src="/images/home-illustration.png" alt="Ilustração" />
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
        <p>UPAth © 2025 - Todos os direitos reservados</p>
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
            <button id="iconVoltar" onClick={() => setShowNotificacoes(false)}>
              ←
            </button>
            <h3>Notificações</h3>
            <button
              id="buttonNotificacoesBolsas"
              onClick={() => setShowLinkNotificacoes(true)}
            >
              Bolsas
            </button>
            <button
              id="buttonNotificacoesNotas"
              onClick={() => setShowLinkNotificacoes(true)}
            >
              Notas de Corte
            </button>
            <button
              id="buttonNotificacoesCursos"
              onClick={() => setShowLinkNotificacoes(true)}
            >
              Cursos
            </button>
          </ModalNotificacoes>
        </ModalOverlay>
      )}

      {/* MODAL Links de Notificações */}
      {showLinkNotificacoes && (
        <ModalOverlay>
          <ModalLinkNotificacoes id="modalLinkNotificacoes">
            <button id="iconVoltar" onClick={() => setShowLinkNotificacoes(false)}>
              ←
            </button>
            <h3>Links</h3>
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
            <button id="iconVoltar" onClick={() => setShowConfig(false)}>
              ←
            </button>
            <h3>Configurações</h3>
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
            <button id="iconVoltar" onClick={() => setShowPerfil(false)}>
              ←
            </button>
            <button id="buttonEditPerfil">Editar Perfil</button>
            <button id="buttonSalvos">Salvos</button>
            <button id="buttonPlanos">Planos</button>
            <button id="buttonSobreNos">Sobre Nós</button>
            <button id="buttonSair">Log Out</button>
            <button id="buttonConfig" onClick={() => setShowConfig(true)}>
              Configurações
            </button>
          </ModalPerfil>
        </ModalOverlay>
      )}
    </Container>
  );
}
