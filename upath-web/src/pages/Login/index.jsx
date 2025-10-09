import React, { useState, useEffect } from "react";
import {
  Container,
  LeftArea,
  StoreButtons,
  RightArea,
  Form,
  Input,
  Button,
  Divider,
  LinkText,
  GoogleButton,
  InputGroup,
  ErrorMessage,
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";
import EnvelopeIcon from "../../assets/envelope.svg";
import LockIcon from "../../assets/lock.svg";
import EyeIcon from "../../assets/eye.svg"; // 👁️ Ícone olho aberto
import EyeSlashIcon from "../../assets/eye-slash.svg"; // 👁️‍🗨️ Ícone olho fechado
import SetaIcon from "../../assets/seta.svg";
import GoogleIcon from "../../assets/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Login - UPath";
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // [RF001] - Autenticar no sistema
    // Regras de Negócio:
    // - Se o usuário preencher e-mail ou senha inválidos, exibir mensagem: "Usuário ou senha inválidos. Tente novamente."

    if (email !== "mauricio.gabriel.al.jr@email.com" || senha !== "Senh@123") {
      setError("Usuário ou senha inválidos. Tente novamente.");
      return;
    }

    setError("");
    alert("Login realizado com sucesso! Redirecionando para o dashboard...");
  };

  return (
    <Container>
      {/* Lado esquerdo */}
      <LeftArea>
        <StoreButtons>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            id="buttonGooglePlay"
            className="buttonGooglePlay"
          >
            <img src={PlayStoreIcon} alt="Google Play" />
            <div>
              <span>Disponível no</span>
              <strong>Google Play</strong>
            </div>
          </a>

          <a
            href="https://www.apple.com/br/app-store/"
            target="_blank"
            rel="noreferrer"
            id="buttonAppStore"
            className="buttonAppStore"
          >
            <img src={AppStoreIcon} alt="App Store" />
            <div>
              <span>Baixe na</span>
              <strong>App Store</strong>
            </div>
          </a>
        </StoreButtons>
        <img src={CelularImg} alt="App Preview" />
      </LeftArea>

      {/* Lado direito */}
      <RightArea>
        <div className="logo-area">
          <img src={Logo} alt="UPATH Logo" width="175" />
          <h1>Login</h1>
        </div>

        <Form onSubmit={handleLogin}>
          <label htmlFor="email">E-mail:</label>
          <InputGroup>
            <img src={EnvelopeIcon} alt="E-mail" />
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Divider />
          </InputGroup>

          <label htmlFor="password">Senha:</label>
          <InputGroup>
            <img src={LockIcon} alt="Senha" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <img
              src={showPassword ? EyeSlashIcon : EyeIcon}
              alt="Mostrar senha"
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
            <Divider />
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <div className="botao-link">
            <Button id="buttonLogar" type="submit">
              Logar <img src={SetaIcon} alt="Login" className="seta" />
            </Button>

            {/* [RF002] - Recuperar Senha */}
            <Link className="link-esquecimento" to="/retrieve" id="linkRecuperar" >
              Esqueceu a senha?
            </Link>
          </div>

          <Divider>ou</Divider>

          <GoogleButton id="buttonLogarGoogle">
            <img src={GoogleIcon} alt="Google" width="20" />
            Logar com Google
          </GoogleButton>

          {/* [RF003] - Realizar Cadastro */}
          <p>
            Não tem uma conta?{" "}
            <Link id="linkCadastrar" className="link-cadastro" to="/register">
              Cadastre-se!
            </Link>
          </p>
        </Form>
      </RightArea>
    </Container>
  );
};

export default Login;
