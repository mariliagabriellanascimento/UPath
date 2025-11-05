import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  NavLinks,
  UserArea,
  Main,
  EscolherTesteSection,
  CardTeste,
  CardTitulo,
  CardDescricao,
  CardItem,
  ButtonTeste,
  FooterInfo,
  Footer,
  ModalOverlay,
  ModalNotificacoes,
  ModalLinkNotificacoes,
  ModalConfig,
  ModalPerfil,
  ChatSection,
  ResultadoContainer,
  FormSimulacaoContainer,
} from "./styles";

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
import { Link } from "react-router-dom";

const Teste = () => {
  // Estados dos modais
  const [showNotificacoes, setShowNotificacoes] = useState(false);
  const [showLinkNotificacoes, setShowLinkNotificacoes] = useState(false);
  const [tipoNotificacao, setTipoNotificacao] = useState("");
  const [showConfig, setShowConfig] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);
  // Etapas do fluxo do teste
  const [etapa, setEtapa] = useState("escolha");
  const [testeResultado, setTesteResultado] = useState(null);
  const [simulacaoResultado, setSimulacaoResultado] = useState(null);


  useEffect(() => {
    document.title = "Teste - UPath";
  }, []);

  const handleFinalizarTeste = () => {
    const dataHora = new Date();
    setTesteResultado({
      data: dataHora.toLocaleDateString(),
      hora: dataHora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });
    setEtapa("resultado");
  };

  const handleSalvarResultado = () => {
    alert("Resultado salvo com sucesso!");
  };

  const handleSimulacaoResultado = (simulacao) => {
    setSimulacaoResultado(simulacao);
    setEtapa("resultadoSimulacao");
  };

  // Estado do link ativo
  const [activeLink, setActiveLink] = useState("teste");

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="logo">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
        </div>
        <NavLinks>
          <Link id="linkHome" to="/homeUser" className={activeLink === "home" ? "active" : ""} onClick={() => setActiveLink("home")}>Home</Link>
          <Link
            id="linkTeste"
            to="/teste"
            className={activeLink === "teste" ? "active" : ""}
            onClick={() => setActiveLink("teste")}
          >
            Teste
          </Link>
          <Link id="linkResultados" to="/results" className={activeLink === "resultados" ? "active" : ""} onClick={() => setActiveLink("resultados")}>Resultados</Link>
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
        {etapa === "escolha" && (
          <EscolherTesteSection>
            <h2>Escolha seu tipo de teste</h2>
            <div className="cards-container">
              <CardTeste className="gratis">
                <CardTitulo tipo="gratis">Teste Diário (Gratuito)</CardTitulo>
                <CardDescricao tipo="gratis">Descrição:</CardDescricao>
                <ul>
                  <CardItem tipo="gratis">1 teste por dia</CardItem>
                  <CardItem tipo="gratis">Resultados gerais e medianos</CardItem>
                  <CardItem tipo="gratis">Respostas menos específicas</CardItem>
                </ul>
                <ButtonTeste id="buttonIniciarTesteGratis" onClick={() => setEtapa("chat")}>Fazer teste grátis</ButtonTeste>
              </CardTeste>

              <CardTeste className="premium">
                <CardTitulo tipo="premium">Teste Premium (Ilimitado)</CardTitulo>
                <CardDescricao tipo="premium">Descrição:</CardDescricao>
                <ul>
                  <CardItem tipo="premium">Testes ilimitados</CardItem>
                  <CardItem tipo="premium">Respostas detalhadas e inteligentes</CardItem>
                  <CardItem tipo="premium">Resultados personalizados</CardItem>
                </ul>
                <ButtonTeste id="buttonAtivarPremium" className="premium-btn">Ativar Premium</ButtonTeste>
              </CardTeste>
            </div>

            <FooterInfo>Você pode realizar testes gratuitos ou desbloquear recursos premium para resultados avançados</FooterInfo>
          </EscolherTesteSection>
        )}

        {etapa === "chat" && (
          <div style={{ width: "100%" }}>
            <ChatTeste
              onFinalizar={() => handleFinalizarTeste()}
              onSalvar={handleSalvarResultado}
              onSimular={() => setEtapa("formSimulacao")}
            />
          </div>
        )}

        {etapa === "formSimulacao" && testeResultado && (
          <FormSimulacao cursosRelacionados={testeResultado.cursos} onResultado={handleSimulacaoResultado} />
        )}

        {etapa === "resultadoSimulacao" && simulacaoResultado && (
          <ResultadoSimulacao simulacao={simulacaoResultado} />
        )}
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
            <Link to="/perfil">
              <button id="buttonEditPerfil">
                <div className="icon-edit">
                  <img src={EditIcon} alt="Editar" /> Editar Perfil
                </div>
              </button>
            </Link>
            <Link to="/salvos">
              <button id="buttonSalvos">
                <div className="icon-salvos">
                  <img src={SalvosIcon} alt="Salvos" />Salvos
                </div>
              </button>
            </Link>
            <Link to="/planos">
              <button id="buttonPlanos">
                <div className="icon-planos">
                  <img src={PlanosIcon} alt="Planos" />Planos
                </div>
              </button>
            </Link>
            <Link to="/sobre">
              <button id="buttonSobreNos">
                <div className="icon-sobre">
                  <img src={SobreIcon} alt="Sobre Nós" />Sobre Nós
                </div>
              </button>
            </Link>
            <Link to="/login">
              <button id="buttonSair">
                <div className="icon-logout">
                  <img src={LogoutIcon} alt="Log Out" />Log Out
                </div>
              </button>
            </Link>

          </ModalPerfil>
        </ModalOverlay>
      )}

    </Container>

  );

}

const ChatTeste = ({ onSalvar, onSimular }) => {
  const BACKEND_URL = "http://localhost:3000";

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [resultado, setResultado] = useState("");

  const addMessage = (text, sender) => {
    setMessages((prev) => [...prev, { text, sender }]);
  };

  const startChat = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Começar" }),
      });
      const data = await res.json();
      addMessage(data.reply, "assistant");
    } catch {
      addMessage("Erro ao conectar com o servidor.", "assistant");
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isFinished) return;

    const userMsg = input.trim();
    addMessage(userMsg, "user");
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });

      const data = await res.json();
      addMessage(data.reply, "assistant");

      if (data.final) {
        setIsFinished(true);
        setTimeout(fetchResultado, 1500);
      }
    } catch {
      addMessage("Erro ao enviar mensagem.", "assistant");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchResultado = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/resultado`);
      const data = await res.json();

      const dataHora = new Date();
      setResultado({
        texto: data.resultado,
        data: dataHora.toLocaleDateString(),
        hora: dataHora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      });
    } catch {
      setResultado({
        texto: "Erro ao buscar resultado final.",
        data: "-",
        hora: "-",
      });
    }
  };

  useEffect(() => {
    startChat();
  }, []);

  return (
      <ChatSection>
      {!resultado ? (
        <>
          <div className="chat-box">
            {messages.map((msg, i) => (
              <p key={i} className={msg.sender}>
                {msg.text}
              </p>
            ))}
            {isLoading && <p>Orientador está digitando...</p>}
          </div>

          {!isFinished && (
            <form onSubmit={sendMessage}>
              <input
                type="text"
                placeholder="Digite sua resposta..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button type="submit">Enviar</button>
            </form>
          )}
        </>
      ) : (
        <div className="resultado-chat">
          <h2>Resultado do Teste</h2>
          <p>{resultado.texto}</p>
          <p>
            Teste realizado às <strong>{resultado.hora}</strong> em{" "}
            <strong>{resultado.data}</strong>
          </p>

          <button id="buttonSalvarResultado" onClick={onSalvar}>Salvar Resultado</button>
          <button id="buttonBaixarResultado">Baixar</button>
          <button id="buttonSimularChance" onClick={onSimular}>Simule sua chance de ingresso</button>
        </div>
      )}
      </ChatSection>
  );
};

const FormSimulacao = ({ cursosRelacionados, onResultado }) => {
  const [form, setForm] = useState({
    ano: "",
    notaRedacao: "",
    notaMatematica: "",
    notaHumanas: "",
    notaLinguagens: "",
    notaNatureza: "",
    estado: "",
    modalidade: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const dataHora = new Date();
    const resultado = {
      cursos: cursosRelacionados.map((c) => ({
        instituicao: "UFPE",
        curso: c,
        notaCorte: Math.floor(Math.random() * 1000) + 600,
        notaUsuario: Math.floor(Math.random() * 1000) + 600,
      })),
      data: dataHora.toLocaleDateString(),
      hora: dataHora.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    onResultado(resultado);
  };

  return (
      <FormSimulacaoContainer>
      <h2>Simulação de Ingresso</h2>

      <input type="number" name="ano" placeholder="Ano do ENEM" onChange={handleChange} />
      <input type="number" name="notaRedacao" placeholder="Nota de Redação" onChange={handleChange} />
      <input type="number" name="notaMatematica" placeholder="Nota de Matemática" onChange={handleChange} />
      <input type="number" name="notaHumanas" placeholder="Nota de Humanas" onChange={handleChange} />
      <input type="number" name="notaLinguagens" placeholder="Nota de Linguagens" onChange={handleChange} />
      <input type="number" name="notaNatureza" placeholder="Nota de Natureza" onChange={handleChange} />
      <input type="text" name="estado" placeholder="Estado (ex: PE)" onChange={handleChange} />
      <select name="modalidade" onChange={handleChange}>
        <option value="">Selecione a modalidade</option>
        <option value="ampla">Ampla concorrência</option>
        <option value="cota">Cota</option>
      </select>

      <button id="buttonSimularAgora" onClick={handleSubmit}>Simular Agora</button>
    </FormSimulacaoContainer>
  );
};

const ResultadoSimulacao = ({ simulacao }) => {
  return (
     <ResultadoContainer>
      <h2>Resultado da Simulação</h2>

      <table>
        <thead>
          <tr>
            <th>Instituição</th>
            <th>Curso</th>
            <th>Nota de Corte</th>
            <th>Sua Nota</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {simulacao.cursos.map((curso, i) => (
            <tr key={i}>
              <td>{curso.instituicao}</td>
              <td>{curso.curso}</td>
              <td>{curso.notaCorte}</td>
              <td>{curso.notaUsuario}</td>
              <td>{curso.notaUsuario >= curso.notaCorte ? "Você consegue entrar pelo SISU!" : "Abaixo da nota de corte"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        Simulação realizada às <strong>{simulacao.hora}</strong> em{" "}
        <strong>{simulacao.data}</strong>
      </p>
     </ResultadoContainer>
  );
};

export default Teste;