import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  NavLinks,
  UserArea,
  Main,
  WelcomeSection,
  ButtonTeste,
  ButtonSimulacao,
  NoticiasSection,
  CardNoticias,
  Footer,
  ModalOverlay,
  ModalPerfil,
} from "./styles";

import EquipeUPathImg from "../../assets/EquipeUPath.png";
import Sisu from "../../assets/sisu.png";
import UFPE from "../../assets/ufpe.jpg";
import UFRPE from "../../assets/ufrpe.jpeg";
import Logo from "../../assets/logo-upath-2.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import EditIcon from "../../assets/edit.svg";
import SobreIcon from "../../assets/sobre.svg";
import LogoutIcon from "../../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";

const HomeUser = () => {
  // Estados dos modais
  const [showPerfil, setShowPerfil] = useState(false);

  // Estado do link ativo
  const [activeLink, setActiveLink] = useState("home");

  const [userNome, setUserNome] = useState("");

  const primeiroNome = userNome.split(" ")[0];

  useEffect(() => {
    document.title = "Home - UPath";
    const nome = localStorage.getItem("userNome");
    if (nome) {
      setUserNome(nome);
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("http://localhost:8000/api/v1/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUserNome(data.user.nome);
      }
    };
    fetchUser();
  }, []);

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
        imagem: Sisu,
      },
      {
        id: 2,
        titulo: "UFPE lança curso de Design Digital",
        descricao:
          "Graduação voltada para inovação, tecnologia e criatividade.",
        imagem: UFPE,
      },
      {
        id: 3,
        titulo: "UFRPE apresenta Eng. de Software",
        descricao:
          "Curso com foco em programação, projetos e desenvolvimento ágil.",
        imagem: UFRPE,
      },
    ];
    setNoticias(noticiasExemplo);
  }, []);

  const navigate = useNavigate();

  const realizarLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await fetch("http://localhost:8000/api/v1/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        localStorage.removeItem("token");
        localStorage.removeItem("userNome");

        navigate("/login");
      } else {
        const data = await response.json();
        console.error("Erro no logout:", data.message || "Erro desconhecido");
        alert("Erro ao tentar fazer logout. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
      alert("Erro no servidor. Tente novamente.");
    }
  };

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
            }}
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
              Nossa plataforma analisará suas chances em programas como Sisu e
              ProUni, além de sugerir cursos e instituições compatíveis.
            </p>
            <Link to="/teste">
              <ButtonTeste id="buttonTeste">Iniciar Teste</ButtonTeste>
            </Link>
            <Link to="/simulacao">
              <ButtonSimulacao id="buttonSimulacao">
                Iniciar Simulação
              </ButtonSimulacao>
            </Link>
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
            <Link>
              <button id="buttonSair" onClick={realizarLogout}>
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

export default HomeUser;
