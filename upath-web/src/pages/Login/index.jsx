import React, { useEffect } from "react";

import {
  Container,
  LeftArea,
  RightArea,
  Form,
  Input,
  Button,
  Divider,
  GoogleButton,
  LinkText,
  InputGroup,
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import EnvelopeIcon from "../../assets/envelope.svg";
import LockIcon from "../../assets/lock.svg";
import SetaIcon from "../../assets/seta.svg";
import { Link } from "react-router-dom";

const Login = () => {

  useEffect(() => {
    document.title = "Login - UPath";
  }, []);

  return (
    <Container>
      {/* Lado esquerdo - imagem do celular */}
      <LeftArea>
        <img src={CelularImg} alt="App Preview" />
      </LeftArea>

      {/* Lado direito - formulário */}
      <RightArea>
        <div className="logo-area">
          <img src={Logo} alt="UPATH Logo" width="175" />
          <h1>Login</h1>
        </div>

        <Form>
          <label>E-mail:</label>
          <InputGroup>
            <img src={EnvelopeIcon} alt="E-mail" />
            <Input type="email" placeholder="Digite seu e-mail..." />
            <Divider></Divider>
          </InputGroup>

          <label>Senha:</label>
          <InputGroup>
            <img src={LockIcon} alt="Senha" />
            <Input type="password" placeholder="Digite sua senha..." />
            <Divider></Divider>
          </InputGroup>

          <div className="botao-link"><Button className="botao-logar">Logar<img src={SetaIcon} alt="Login" className="seta" /></Button>
            <Link to="/retrieve" className="link-esquecimento">Esqueceu a senha?</Link></div>

          <Divider>ou</Divider>

          <GoogleButton className="botao-logar-google">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              width="20"
            />
            Logar com Google
          </GoogleButton>

          <p>
            Não tem uma conta? <Link className="link-cadastro" to="/register">Cadastre-se!</Link>
          </p>
        </Form>
      </RightArea>
    </Container>
  );
};

export default Login;