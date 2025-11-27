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
  Button,
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import LogoutIcon from "../../assets/logout.svg";
import { Link, useNavigate } from "react-router-dom";

const HomeAdmin = () => {
  const [showPerfil, setShowPerfil] = useState(false);

  const [userNome, setUserNome] = useState("");
  const primeiroNome = userNome.split(" ")[0];

  useEffect(() => {
    document.title = "Home Administrativa - UPath";
    const nome = localStorage.getItem("userNome");
    if (nome) setUserNome(nome);
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("http://localhost:8000/api/v1/admin/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUserNome(data.user.nome);
      }
    };
    fetchUser();
  }, []);

  const [tipoRelatorio, setTipoRelatorio] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [dadosGrafico, setDadosGrafico] = useState({ labels: [], valores: [] });
  const [totalUsuarios, setTotalUsuarios] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  const gerarRelatorio = async () => {
    setErro("");
    if (!tipoRelatorio || !periodo) {
      setErro("Selecione tipo e período do relatório.");
      return;
    }

    setLoading(true);
    try {
      const query = new URLSearchParams({
        tipo: tipoRelatorio,
        periodo,
      }).toString();
      const response = await fetch(
        `http://localhost:8000/api/v1/admin/reports/preview?${query}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
      const data = await response.json();

      if (data.success) {
        setDadosGrafico(data.data.grafico);
        if (data.data.total_usuarios !== undefined) {
          setTotalUsuarios(data.data.total_usuarios);
        }
      } else {
        setErro("Erro ao gerar relatório.");
      }
    } catch (err) {
      console.error(err);
      setErro("Erro ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  };

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
        <h1>Gerenciamento de Métricas</h1>
        <RelatoriosContainer>
          <FiltrosContainer>
            <div className="intro-text">
              <h1>Gerar Métricas</h1>
              <p>Selecione os parâmetros.</p>
            </div>

            <div className="tipo-relatorio-select">
              <label htmlFor="tipoRelatorio">Tipo de Relatório:</label>
              <select
                id="tipoRelatorio"
                value={tipoRelatorio}
                onChange={(e) => setTipoRelatorio(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="usuarios">Usuários Ativos</option>
                <option value="acessos">Acessos</option>
                <option value="erros">Erros do Sistema</option>
              </select>
            </div>

            <div className="periodo-select">
              <label htmlFor="periodo">Filtro:</label>
              <select
                id="periodo"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
              >
                <option value="">Selecione</option>
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
              </select>
            </div>

            <Button onClick={gerarRelatorio} disabled={loading}>
              {loading ? "Carregando..." : "Gerar Relatório"}
            </Button>

            {erro && <p style={{ color: "red", margin: "0"}}>{erro}</p>}
          </FiltrosContainer>

          <GraficoContainer>
            <div className="grafico-barras">
              {dadosGrafico.valores &&
                dadosGrafico.valores.map((valor, i) => (
                  <div
                    key={i}
                    className="barra"
                    style={{ height: `${valor * 2}px` }}
                  />
                ))}
            </div>
            <div className="legenda">
              {dadosGrafico.labels &&
                dadosGrafico.labels.map((label, i) => (
                  <span key={i}>{label}</span>
                ))}
            </div>
            {totalUsuarios !== null && (
              <p>Total de usuários: {totalUsuarios}</p>
            )}
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
            <Link>
              <button id="buttonSair" onClick={realizarLogout}>
                <div className="icon-logout">
                  <img src={LogoutIcon} alt="Log Out" /> Log Out
                </div>
              </button>
            </Link>
          </ModalPerfil>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default HomeAdmin;
