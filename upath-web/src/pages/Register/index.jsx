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
import LockIcon from "../../assets/lock.svg";
import SetaIcon from "../../assets/seta.svg";
import UserIcon from "../../assets/user.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";
import { Link } from "react-router-dom";

const Register = () => {

    useEffect(() => {
        document.title = "Cadastro - UPath";
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
                    <img src={Logo} alt="UPATH Logo" width="175" />
                    <div className="cadastro">
                        <Link to="/login" id="iconVoltar"><img src={VoltarIcon} alt="Voltar" /></Link>
                        <h1>Cadastro</h1>
                    </div>
                </div>

                <Form>
                    <label>Nome:</label>
                    <InputGroup>
                        <img src={UserIcon} alt="Nome" />
                        <Input id="name" 
                        name="name" 
                        type="name" 
                        placeholder="Digite seu nome..." 
                        className="name" />
                        <Divider></Divider>
                    </InputGroup>

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

                    <label>Confirmar e-mail:</label>
                    <InputGroup>
                        <img src={EnvelopeIcon} alt="Confirmação de E-mail" />
                        <Input id="email"
                            name="email"
                            type="email"
                            placeholder="Confirme seu e-mail..."
                            className="email" />
                        <Divider></Divider>
                    </InputGroup>

                    <label>Senha:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="Senha" />
                        <Input id="password"
                            name="password"
                            type="password"
                            placeholder="Digite sua senha..."
                            className="password" />
                        <Divider></Divider>
                    </InputGroup>

                    <label>Repetir senha:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="Repetição de Senha" />
                        <Input id="password"
                            name="password"
                            type="password"
                            placeholder="Repita sua senha..."
                            className="password" />
                        <Divider></Divider>
                    </InputGroup>

                    <div className="botao-link">
                        <Button id="buttonCadastrar" className="botao-cadastrar">Cadastrar<img src={SetaIcon} alt="Login" className="seta" /></Button>
                    </div>

                </Form>
            </RightArea>
        </Container>
    );
};

export default Register;