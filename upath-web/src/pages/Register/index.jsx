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
} from "./styles";

import Logo from "../../assets/logo-upath-2.svg";
import CelularImg from "../../assets/celular.svg";
import EnvelopeIcon from "../../assets/envelope.svg";
import LockIcon from "../../assets/lock.svg";
import SetaIcon from "../../assets/seta.svg";
import UserIcon from "../../assets/user.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import { Link } from "react-router-dom";

const Register = () => {

    useEffect(() => {
        document.title = "Cadastro - UPath";
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
                    <div className="cadastro">
                        <Link to="/login"><img src={VoltarIcon} alt="Voltar" /></Link>
                        <h1>Cadastro</h1>
                    </div>
                </div>

                <Form>
                    <label>Nome:</label>
                    <InputGroup>
                        <img src={UserIcon} alt="Nome" />
                        <Input type="name" placeholder="Digite seu nome..." />
                        <Divider></Divider>
                    </InputGroup>

                    <label>E-mail:</label>
                    <InputGroup>
                        <img src={EnvelopeIcon} alt="E-mail" />
                        <Input type="email" placeholder="Digite seu e-mail..." />
                        <Divider></Divider>
                    </InputGroup>

                    <label>Confirmar e-mail:</label>
                    <InputGroup>
                        <img src={EnvelopeIcon} alt="Confirmação de E-mail" />
                        <Input type="email" placeholder="Confirme seu e-mail..." />
                        <Divider></Divider>
                    </InputGroup>

                    <label>Senha:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="Senha" />
                        <Input type="password" placeholder="Digite sua senha..." />
                        <Divider></Divider>
                    </InputGroup>

                    <label>Repetir senha:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="Repetição de Senha" />
                        <Input type="password" placeholder="Repita sua senha..." />
                        <Divider></Divider>
                    </InputGroup>

                    <div className="botao-link">
                        <Button className="botao-cadastrar">Cadastrar<img src={SetaIcon} alt="Login" className="seta" /></Button>
                    </div>

                </Form>
            </RightArea>
        </Container>
    );
};

export default Register;