import React, { useState, useEffect } from "react";
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
import LockIcon from "../../assets/lock.svg";
import EyeIcon from "../../assets/eye.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";
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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });

    const [error, setError] = useState("");
    const [highlightFields, setHighlightFields] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        setHighlightFields({});

        const emptyFields = Object.entries(formData)
            .filter(([_, value]) => value.trim() === "")
            .map(([key]) => key);

        if (emptyFields.length > 0) {
            setError("Ainda há campos não preenchidos. Por favor, preencha todos os campos vazios.");
            setHighlightFields(
                emptyFields.reduce((acc, field) => ({ ...acc, [field]: true }), {})
            );
            return;
        }

        if (!isValidEmail(formData.email)) {
            setError("E-mail inválido. Tente novamente.");
            setHighlightFields({ email: true });
            return;
        }

        if (formData.email !== formData.confirmEmail) {
            setError("Os e-mails precisam ser iguais.");
            setHighlightFields({ email: true, confirmEmail: true });
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("As senhas precisam ser iguais.");
            setHighlightFields({ password: true, confirmPassword: true });
            return;
        }

        alert("Cadastro realizado com sucesso!");
        console.log("Dados enviados:", formData);
    };

    return (
        <Container>
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

            <RightArea>
                <div className="logo-area">
                    <img src={Logo} alt="UPATH Logo" className="logo-upath" />
                    <div className="cadastro">
                        <Link to="/login" id="iconVoltar">
                            <img src={VoltarIcon} alt="Voltar" />
                        </Link>
                        <h1>Cadastro</h1>
                    </div>
                </div>

                <Form onSubmit={handleSubmit}>
                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    <label>Nome:</label>
                    <InputGroup>
                        <img src={UserIcon} alt="Nome" />
                        <Input
                            name="name"
                            type="text"
                            placeholder="Digite seu nome..."
                            value={formData.name}
                            onChange={handleChange}
                            className={highlightFields.name ? "input-error" : ""}
                        />
                        <Divider />
                    </InputGroup>

                    <label>E-mail:</label>
                    <InputGroup>
                        <img src={EnvelopeIcon} alt="E-mail" />
                        <Input
                            name="email"
                            type="email"
                            placeholder="Digite seu e-mail..."
                            value={formData.email}
                            onChange={handleChange}
                            className={highlightFields.email ? "input-error" : ""}
                        />
                        <Divider />
                    </InputGroup>

                    <label>Confirmar e-mail:</label>
                    <InputGroup>
                        <img src={EnvelopeIcon} alt="Confirmação de E-mail" />
                        <Input
                            name="confirmEmail"
                            type="email"
                            placeholder="Confirme seu e-mail..."
                            value={formData.confirmEmail}
                            onChange={handleChange}
                            className={highlightFields.confirmEmail ? "input-error" : ""}
                        />
                        <Divider />
                    </InputGroup>

                    <label>Senha:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="Senha" />
                        <Input
                            name="password"
                            type={showPassword.password ? "text" : "password"}
                            placeholder="Digite sua senha..."
                            value={formData.password}
                            onChange={handleChange}
                            className={highlightFields.password ? "input-error" : ""}
                        />
                        <img
                            src={showPassword.password ? EyeSlashIcon : EyeIcon}
                            alt="Mostrar senha"
                            className="eye-icon"
                            onClick={() =>
                                setShowPassword(prev => ({ ...prev, password: !prev.password }))
                            }
                        />
                        <Divider />
                    </InputGroup>

                    <label>Repetir senha:</label>
                    <InputGroup>
                        <img src={LockIcon} alt="Repetição de Senha" />
                        <Input
                            name="confirmPassword"
                            type={showPassword.confirmPassword ? "text" : "password"}
                            placeholder="Repita sua senha..."
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className={highlightFields.confirmPassword ? "input-error" : ""}
                        />
                        <img
                            src={showPassword.confirmPassword ? EyeSlashIcon : EyeIcon}
                            alt="Mostrar senha"
                            className="eye-icon"
                            onClick={() =>
                                setShowPassword(prev => ({ ...prev, confirmPassword: !prev.confirmPassword }))
                            }
                        />
                        <Divider />
                    </InputGroup>

                    <div className="botao-link">
                        <Button id="buttonCadastrar" className="botao-cadastrar" type="submit">
                            Cadastrar <img src={SetaIcon} alt="Login" className="seta" />
                        </Button>
                    </div>
                </Form>
            </RightArea>
        </Container>
    );
};

export default Register;
