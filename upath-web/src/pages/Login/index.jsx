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
import EyeIcon from "../../assets/eye.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";
import SetaIcon from "../../assets/seta.svg";
import GoogleIcon from "../../assets/google.svg";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login - UPath";
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Define a função global chamada quando o login do Google é feito
    window.handleCredentialResponse = (response) => {
      const token = response.credential;

      // Envia o token para o back-end validar
      fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("userEmail", data.email);
            alert("Login Google realizado com sucesso!");
            navigate("/homeUser");
          } else {
            alert("Erro ao autenticar com o Google.");
          }
        })
        .catch((err) => console.error("Erro Google Login:", err));
    };
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    // Lista simulada de usuários
    const adminUser = {
      email: "mauricio.gabriel.al@email.com",
      senha: "Senh@123",
      role: "admin",
    };

    const studentUser = {
      email: "mauricio.gabriel.al.jr@email.com",
      senha: "Senh@123",
      role: "user",
    };

    // Validação básica
    let loggedUser = null;

    if (
      email === adminUser.email &&
      senha === adminUser.senha
    ) {
      loggedUser = adminUser;
    } else if (
      email === studentUser.email &&
      senha === studentUser.senha
    ) {
      loggedUser = studentUser;
    }

    if (!loggedUser) {
      setError("Usuário ou senha inválidos. Tente novamente.");
      return;
    }

    // Armazena os dados de login (simulação)
    localStorage.setItem("userRole", loggedUser.role);
    localStorage.setItem("userEmail", loggedUser.email);

    setError("");

    if (loggedUser.role === "admin") {
      localStorage.setItem("emailAdmin", loggedUser.email);
      localStorage.setItem("pinAdmin", "1234"); // PIN de teste
      alert("Login de administrador detectado! Indo para autenticação PIN...");
      navigate("/auth");
    } else {
      alert("Login realizado com sucesso! Redirecionando para a home...");
      navigate("/homeUser");
    }
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
          <div className="logo">
            <img src={Logo} alt="UPATH Logo" className="logo-upath" />
          </div>
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

            <Link
              className="link-esquecimento"
              to="/retrieve"
              id="linkRecuperar"
            >
              Esqueceu a senha?
            </Link>
          </div>

          <Divider>ou</Divider>

          <div
            id="g_id_onload"
            data-client_id="SEU_CLIENT_ID_AQUI.apps.googleusercontent.com"
            data-context="signin"
            data-ux_mode="popup"
            data-callback="handleCredentialResponse"
            data-auto_prompt="false"
          ></div>

          <div
            className="g_id_signin"
            data-type="standard"
            data-shape="rectangular"
            data-theme="outline"
            data-text="signin_with"
            data-size="large"
            data-logo_alignment="left"
          ></div>

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
