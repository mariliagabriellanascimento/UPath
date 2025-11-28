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
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import EnvelopeIcon from "../../assets/envelope.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import SetaIcon from "../../assets/seta.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";

import { Link, useNavigate } from "react-router-dom";

// ⭐ Usa o mesmo cliente do login/register
import { authApi } from "../../services/api";

const Retrieve = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Recuperação de Conta - UPath";
  }, []);

  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  const handleRecuperar = async (e) => {
    e.preventDefault();
    setMensagem("");
    setErro(false);

    if (!email.trim()) {
      setMensagem("Por favor, preencha o campo de e-mail.");
      setErro(true);
      return;
    }

    try {
      const response = await authApi.forgotPassword({ email });
      const data = response.data;

      setMensagem(data.message);
      setErro(false);

      // ⚠️ DEV MODE — redireciona automaticamente com o token
      if (data.reset_token) {
        console.log("RESET TOKEN (dev): ", data.reset_token);
        navigate(`/reset-password?token=${data.reset_token}`);
      }

      alert("Se o e-mail estiver cadastrado, você poderá redefinir sua senha.");
    } catch (error) {
      console.error(error);
      const msg =
        error.response?.data?.detail ||
        "Erro ao enviar instruções. Tente novamente.";
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

          <div className="esquecimento">
            <Link to="/login" id="iconVoltar">
              <img src={VoltarIcon} alt="Voltar" />
            </Link>
            <h1>Recuperação</h1>
          </div>

          <h3>Digite seu e-mail para recuperar sua conta:</h3>
        </div>

        <Form onSubmit={handleRecuperar}>
          {mensagem && (
            <ErrorMessage className={erro ? "erro" : "sucesso"}>
              {mensagem}
            </ErrorMessage>
          )}

          <label>E-mail:</label>
          <InputGroup>
            <img src={EnvelopeIcon} alt="E-mail" />
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Divider />
          </InputGroup>

          <div className="botao-link">
            <Button id="buttonEnviarEmail" className="botao-enviarEmail" type="submit">
              Enviar
              <img src={SetaIcon} className="seta" />
            </Button>
          </div>
        </Form>
      </RightArea>
    </Container>
  );
};

export default Retrieve;