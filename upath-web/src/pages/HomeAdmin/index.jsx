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
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import LogoutIcon from "../../assets/logout.svg";
import { useNavigate } from "react-router-dom";
import { adminApi } from "../../services/api"; 

const HomeAdmin = () => {
  const navigate = useNavigate();

  const [showPerfil, setShowPerfil] = useState(false);
  const [userNome, setUserNome] = useState("");

  // filtros
  const [tipoRelatorio, setTipoRelatorio] = useState("");
  const [periodo, setPeriodo] = useState("");

  // dados do gráfico vindos do back
  const [labels, setLabels] = useState(["Seg", "Ter", "Qua", "Qui", "Sex"]);
  const [valores, setValores] = useState([60, 90, 40, 80, 70]); // valores iniciais só pra não ficar vazio
  const [totalUsuarios, setTotalUsuarios] = useState(null);

  // feedback
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  const primeiroNome = userNome ? userNome.split(" ")[0] : "";

  useEffect(() => {
    document.title = "Home Administrativa - UPath";
    const nome = localStorage.getItem("userNome");
    if (nome) setUserNome(nome);
  }, []);

  // Buscar preview do relatório no FastAPI
  const handleGerarRelatorio = async () => {
    setErro("");
    setMensagem("");

    if (!tipoRelatorio || !periodo) {
      setErro("Selecione o tipo de relatório e o período.");
      return;
    }

    setLoading(true);
    try {
      const { data } = await adminApi.preview({
        tipo: tipoRelatorio,
        periodo,
      });

      if (!data.success) {
        setErro("Erro ao carregar relatório.");
      } else {
        const grafico = data.data?.grafico;
        setLabels(grafico?.labels || []);
        setValores(grafico?.valores || []);
        setTotalUsuarios(data.data?.total_usuarios ?? null);
        setMensagem("Relatório carregado com sucesso.");
      }
    } catch (error) {
      const msg =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Erro ao conectar com o servidor.";
      setErro(msg);
    } finally {
      setLoading(false);
    }
  };

  // logout simples
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userNome");
    localStorage.removeItem("userRole");
    navigate("/login");
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
        <h1>Gerenciamento de Relatório e Métricas</h1>

        {erro && <p style={{ color: "red", marginBottom: 8 }}>{erro}</p>}
        {mensagem && !erro && (
          <p style={{ color: "green", marginBottom: 8 }}>{mensagem}</p>
        )}

        <RelatoriosContainer>
          {/* Filtros */}
          <FiltrosContainer>
            <div className="intro-text">
              <h1>Gerar Relatório e Métricas</h1>
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

            <button
              type="button"
              className="botao-gerar"
              onClick={handleGerarRelatorio}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Gerar relatório"}
            </button>
          </FiltrosContainer>

          {/* Gráfico com dados da API */}
          <GraficoContainer>
            <h2>Gráfico de Acesso</h2>

            {totalUsuarios !== null && (
              <p style={{ marginBottom: 12 }}>
                Total de usuários no período: <strong>{totalUsuarios}</strong>
              </p>
            )}

            <div className="grafico-barras">
              {valores.map((valor, i) => (
                <div
                  key={i}
                  className="barra"
                  style={{ height: `${valor * 2}px` }}
                  title={`${labels[i]}: ${valor}`}
                ></div>
              ))}
            </div>
            <div className="legenda">
              {labels.map((label, idx) => (
                <span key={idx}>{label}</span>
              ))}
            </div>
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
        <ModalOverlay onClick={() => setShowPerfil(false)}>
          <ModalPerfil onClick={(e) => e.stopPropagation()}>
            <button id="buttonSair" onClick={handleLogout}>
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
