import React, { useEffect, useState } from "react";
import {
  Container,
  LeftArea,
  RightArea,
  Form,
  Input,
  Button,
  Divider,
  InputGroup,
  StoreButtons,
  ErrorMessage,
} 
from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import LockIcon from "../../assets/lock.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import SetaIcon from "../../assets/seta.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";
import EyeIcon from "../../assets/eye.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { authApi } from "../../services/api";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);
  const [showPassword, setShowPassword] = useState({
    senha: false,
    confirmSenha: false,
  });

  // pega o token da URL: /reset-password?token=xxxxx
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

  useEffect(() => {
    document.title = "Redefinir Senha - UPath";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem("");
    setErro(false);

    if (!token) {
      setMensagem("Token inválido ou ausente. Tente iniciar o processo novamente.");
      setErro(true);
      return;
    }

    if (!senha.trim() || !confirmSenha.trim()) {
      setMensagem("Preencha todos os campos.");
      setErro(true);
      return;
    }

    if (senha !== confirmSenha) {
      setMensagem("As senhas precisam ser iguais.");
      setErro(true);
      return;
    }

    if (senha.length < 8) {
      // o back tem uma regra forte, mas aqui fazemos só um mínimo
      setMensagem("A senha deve ter pelo menos 8 caracteres.");
      setErro(true);
      return;
    }

    try {
      const payload = {
        token,
        senha,
        confirmSenha,
      };

      const response = await authApi.resetPassword(payload);
      const data = response.data;

      setMensagem(data.message || "Senha redefinida com sucesso!");
      setErro(false);

      alert("Senha redefinida com sucesso! Faça login com a nova senha.");
      navigate("/login");
    } catch (error) {
      console.error(error);

      const msg =
        error.response?.data?.detail ||
        error.response?.data?.message ||
        "Erro ao redefinir senha. Tente novamente.";

      setMensagem(msg);
      setErro(true);
    }
  };

  return (
    <Container>
      <LeftArea>
        <StoreButtons>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
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

      <RightArea>
        <div className="logo-area">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />

          <div className="redefinir">
            <Link to="/retrieve" id="iconVoltar">
              <img src={VoltarIcon} alt="Voltar" />
            </Link>
            <h1>Redefinir Senha</h1>
          </div>

          <h3>Defina uma nova senha para sua conta:</h3>
        </div>

        <Form onSubmit={handleSubmit}>
          {mensagem && (
            <ErrorMessage className={erro ? "erro" : "sucesso"}>
              {mensagem}
            </ErrorMessage>
          )}

          <label>Nova senha:</label>
          <InputGroup>
            <img src={LockIcon} alt="Senha" />
            <Input
              type={showPassword.senha ? "text" : "password"}
              placeholder="Digite a nova senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <img
              src={showPassword.senha ? EyeSlashIcon : EyeIcon}
              alt="Mostrar senha"
              className="eye-icon"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  senha: !prev.senha,
                }))
              }
            />
            <Divider />
          </InputGroup>

          <label>Confirmar nova senha:</label>
          <InputGroup>
            <img src={LockIcon} alt="Confirmar Senha" />
            <Input
              type={showPassword.confirmSenha ? "text" : "password"}
              placeholder="Repita a nova senha..."
              value={confirmSenha}
              onChange={(e) => setConfirmSenha(e.target.value)}
            />
            <img
              src={showPassword.confirmSenha ? EyeSlashIcon : EyeIcon}
              alt="Mostrar senha"
              className="eye-icon"
              onClick={() =>
                setShowPassword((prev) => ({
                  ...prev,
                  confirmSenha: !prev.confirmSenha,
                }))
              }
            />
            <Divider />
          </InputGroup>

          <div className="botao-link">
            <Button
              id="buttonResetPassword"
              className="botao-resetSenha"
              type="submit"
            >
              Redefinir
              <img src={SetaIcon} className="seta" alt="Confirmar" />
            </Button>
          </div>
        </Form>
      </RightArea>
    </Container>
  );
};

export default ResetPassword;