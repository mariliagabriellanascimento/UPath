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
import SetaIcon from "../../assets/seta.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import { Link } from "react-router-dom";

const Retrieve = () => {

    useEffect(() => {
        document.title = "Recuperação de Conta- UPath";
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
                        <h1>Recuperação</h1>
                    </div>
                    <h3>Digite seu e-mail para continuar o processo de recuperação da conta:</h3>
                </div>

                <Form>

                    <label>E-mail:</label>
                    <InputGroup>
                        <img src={EnvelopeIcon} alt="E-mail" />
                        <Input type="email" placeholder="Digite seu e-mail..." />
                        <Divider></Divider>
                    </InputGroup>

                    <div className="botao-link">
                        <Button className="botao-cadastrar">Enviar<img src={SetaIcon} alt="Login" className="seta" /></Button>
                    </div>

                </Form>
            </RightArea>
        </Container>
    );
};

export default Retrieve;