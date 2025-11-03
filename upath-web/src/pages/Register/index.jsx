import React, { useState, useEffect } from "react";
import {
  Container, LeftArea, RightArea, Form, Input, Button, Divider, InputGroup, ErrorMessage, StoreButtons
} from "./styles";
import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import SetaIcon from "../../assets/seta.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/api";

const Register: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => { document.title = "Criar Conta - UPath"; }, []);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensagem("");
    setErro(false);

    if (!email.trim() || !password.trim()) {
      setMensagem("Preencha e-mail e senha.");
      setErro(true);
      return;
    }
    if (password.length < 8) {
      setMensagem("A senha deve ter pelo menos 8 caracteres.");
      setErro(true);
      return;
    }
    if (password !== confirm) {
      setMensagem("As senhas não coincidem.");
      setErro(true);
      return;
    }

    try {
      setCarregando(true);
      await registerUser({ email, password, full_name: fullName || undefined });
      setMensagem("Conta criada com sucesso! Você já pode fazer login.");
      setErro(false);
      // opcional: redireciona após 1s
      setTimeout(() => navigate("/login"), 800);
    } catch (err: any) {
      setMensagem(err.message || "Erro ao registrar.");
      setErro(true);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <Container>
      <LeftArea>
        <StoreButtons>
          <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
            <img src={PlayStoreIcon} alt="Google Play" />
            <div><span>Disponível no</span><strong>Google Play</strong></div>
          </a>
          <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noreferrer">
            <img src={AppStoreIcon} alt="App Store" />
            <div><span>Baixe na</span><strong>App Store</strong></div>
          </a>
        </StoreButtons>
        <img src={CelularImg} alt="App Preview" />
      </LeftArea>

      <RightArea>
        <div className="logo-area">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
          <div className="autenticacao">
            <Link to="/login" id="iconVoltar">
              <img src={VoltarIcon} alt="Voltar" />
            </Link>
            <h1>Criar conta</h1>
          </div>
          <h3>Cadastre-se para acessar o sistema.</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          {mensagem && (
            <ErrorMessage className={erro ? "erro" : "sucesso"}>{mensagem}</ErrorMessage>
          )}

          <label htmlFor="fullName">Nome completo (opcional):</label>
          <InputGroup>
            <Input id="fullName" name="fullName" type="text"
              placeholder="Seu nome"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Divider />
          </InputGroup>

          <label htmlFor="email">E-mail:</label>
          <InputGroup>
            <Input id="email" name="email" type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Divider />
          </InputGroup>

          <label htmlFor="password">Senha:</label>
          <InputGroup>
            <Input id="password" name="password" type="password"
              placeholder="Mínimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Divider />
          </InputGroup>

          <label htmlFor="confirm">Confirmar senha:</label>
          <InputGroup>
            <Input id="confirm" name="confirm" type="password"
              placeholder="Repita a senha"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            <Divider />
          </InputGroup>

          <div className="botao-link">
            <Button type="submit" disabled={carregando}>
              {carregando ? <span>Cadastrando...</span> : <>Criar conta <img src={SetaIcon} className="seta" alt="Seta" /></>}
            </Button>
          </div>
        </Form>
      </RightArea>
    </Container>
  );
};

export default Register;
