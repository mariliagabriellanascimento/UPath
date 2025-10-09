import React, { useEffect } from "react";
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
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import EnvelopeIcon from "../../assets/envelope.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import SetaIcon from "../../assets/seta.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";
import { Link } from "react-router-dom";

const Retrieve = () => {

  useEffect(() => {
    document.title = "Recuperação de Conta- UPath";
  }, []);

  return (
    <Container>
      {/* Lado esquerdo - imagem do celular */}
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

      {/* Lado direito - formulário */}
      <RightArea>
        <div className="logo-area">
          <img src={Logo} alt="UPATH Logo" className="logo-upath" />
          <div className="esquecimento">
            <Link to="/login" id="iconVoltar"><img  src={VoltarIcon} alt="Voltar" /></Link>
            <h1>Recuperação</h1>
          </div>
          <h3>Digite seu e-mail para continuar o processo de recuperação da conta:</h3>
        </div>

        <Form>
          <label>E-mail:</label>
          <InputGroup>
            <img src={EnvelopeIcon} alt="E-mail" />
            <Input id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail..."
              className="email" />
            <Divider></Divider>
          </InputGroup>

          <div className="botao-link">
            <Button id="buttonEnviarEmail" className="botao-enviarEmail" alt="Enviar">Enviar<img src={SetaIcon} className="seta" /></Button>
          </div>

        </Form>
      </RightArea>
    </Container>
  );
};

export default Retrieve;