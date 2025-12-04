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
  ModalPerfil,
  Toast,
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import EditIcon from "../../assets/edit.svg";
import SobreIcon from "../../assets/sobre.svg";
import LogoutIcon from "../../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";

const Teste = () => {
  // Estados dos modais
  const [showPerfil, setShowPerfil] = useState(false);

  // Estado do link ativo
  const [activeLink, setActiveLink] = useState("simulacao");

  const [userNome, setUserNome] = useState("");

  const primeiroNome = userNome.split(" ")[0];

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    document.title = "Simulação - UPath";
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

  // Estados da simulação
  const [curso, setCurso] = useState("");
  const [nota, setNota] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  // Função de envio para API
  function enviar() {
    setErro(""); // limpa erro anterior

    if (!curso) {
      setErro("Por favor, selecione um curso!");
      return;
    }

    if (!nota) {
      setErro("Por favor, digite sua nota!");
      return;
    }

    fetch("http://localhost:4000/predict", {
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
        console.error(err);
        setErro("Erro ao conectar ao servidor.");
      });
  }

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
        setToastMessage("Erro ao tentar fazer logout. Tente novamente.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }
    } catch (error) {
      console.error("Erro ao realizar logout:", error);
      setToastMessage("Erro no servidor. Tente novamente.");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2500);
    }
  };

  return (
    <>
      {showToast && <Toast>{toastMessage}</Toast>}
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
          <h3>Simulação de Ingresso</h3>
          <CardSimulacao>
            <Linha>
              <Campo>
                <label>Curso:</label>
                <select
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                >
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

          {erro && (
            <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
              {erro}
            </p>
          )}
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
    </>
  );
};

export default Teste;
