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
import LockIcon from "../../assets/lock.svg";
import EyeIcon from "../../assets/eye.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import SetaIcon from "../../assets/seta.svg";
import PlayStoreIcon from "../../assets/google-play.svg";
import AppStoreIcon from "../../assets/app-store.svg";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Autenticação - UPath";
    }, []);

    const [showPin, setShowPin] = useState(false);
    const [pin, setPin] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState(false);
    const [carregando, setCarregando] = useState(false);

    // Pega o PIN e email armazenados
    const pinArmazenado = localStorage.getItem("pinAdmin");
    const emailAdmin = localStorage.getItem("emailAdmin");

    const handleEnviar = (e) => {
        e.preventDefault();
        setMensagem("");
        setErro(false);

        if (!pin.trim()) {
            setMensagem("Por favor, digite o PIN.");
            setErro(true);
            return;
        }

        if (pin.trim() !== pinArmazenado) {
            setMensagem("PIN incorreto. Tente novamente.");
            setErro(true);
            return;
        }

        setCarregando(true);

        setTimeout(() => {
            setCarregando(false);
            alert(`Bem-vindo, ${emailAdmin}!`);
            navigate("/homeAdmin");
        }, 1000);
    };

    return (
        <Container>
            {/* Lado esquerdo */}
            <LeftArea>
                <StoreButtons>
                    <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                        <img src={PlayStoreIcon} alt="Google Play" />
                        <div>
                            <span>Disponível no</span>
                            <strong>Google Play</strong>
                        </div>
                    </a>

                    <a href="https://www.apple.com/br/app-store/" target="_blank" rel="noreferrer">
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
                    <img src={Logo} alt="UPATH Logo" className="logo-upath" />

                    <div className="autenticacao">
                        <Link to="/login" id="iconVoltar">
                            <img src={VoltarIcon} alt="Voltar" />
                        </Link>
                        <h1>Autenticação</h1>
                    </div>

                    <h3>
                        Digite seu PIN de segurança para autenticar no sistema como administrador:
                    </h3>
                </div>

                <Form onSubmit={handleEnviar}>
                    {mensagem && (
                        <ErrorMessage className={erro ? "erro" : "sucesso"}>
                            {mensagem}
                        </ErrorMessage>
                    )}

                    <label htmlFor="tokenAdmin">PIN:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="PIN" />
                        <Input
                            id="tokenAdmin"
                            name="tokenAdmin"
                            type={showPin ? "text" : "password"} 
                            placeholder="Digite seu PIN..."
                            maxLength={4}
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                        />
                        <img
                            src={showPin ? EyeSlashIcon : EyeIcon}
                            alt={showPin ? "Esconder PIN" : "Mostrar PIN"}
                            className="eye-icon"
                            onClick={() => setShowPin(!showPin)}
                        />
                        <Divider />
                    </InputGroup>

                    <div className="botao-link">
                        <Button type="submit" disabled={carregando}>
                            {carregando ? (
                                <span>Verificando...</span>
                            ) : (
                                <>
                                    Enviar <img src={SetaIcon} className="seta" alt="Seta" />
                                </>
                            )}
                        </Button>
                    </div>
                </Form>
            </RightArea>
        </Container>
    );
};

export default Auth;
