// src/pages/Perfil/index.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Header,
  Main,
  EditUserArea,
  AvatarWrapper,
  Avatar,
  ChangeImageButton,
  Form,
  InputGroup,
  Input,
  Divider,
  Button,
  Footer,
} from "./styles";

import VoltarIcon from "../../assets/seta-voltar.svg";
import UserIcon from "../../assets/user.svg";
import LockIcon from "../../assets/lock.svg";
import EyeIcon from "../../assets/eye.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";
import EditIcon from "../../assets/editAtivo.svg";
import EditImg from "../../assets/edit.svg";
import DefaultAvatar from "../../assets/default-avatar.svg";
import { useNavigate } from "react-router-dom";

// 👇 usa o cliente que você já criou
import { authApi } from "../../services/api";

const Perfil = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(DefaultAvatar);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    document.title = "Editar Perfil - UPath";

    const nomeLocal = localStorage.getItem("userNome");
    if (nomeLocal) setNome(nomeLocal);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
    setAvatarFile(file); // <-- agora guarda o arquivo pra enviar
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const payload = { nome };

      if (senha && senha.trim()) {
        payload.senha = senha;
      }

      // agora envia JSON direto
      const response = await authApi.updateProfile(payload);
      const data = response.data;

      if (!data.success) {
        setError(data.message || "Erro ao atualizar.");
        return;
      }

      if (data.data?.nome) {
        localStorage.setItem("userNome", data.data.nome);
        setNome(data.data.nome);
      }

      setSuccess(data.message || "Alterações salvas com sucesso!");
      setSenha("");
    } catch (err) {
      console.error(err);
      const msg =
        err.response?.data?.detail ||
        err.response?.data?.message ||
        "Erro no servidor. Tente novamente.";
      setError(msg);
    }
  };


  return (
    <Container>
      {/* CABEÇALHO */}
      <Header>
        <div className="voltar">
          <button id="iconVoltar" onClick={() => navigate(-1)}>
            <img src={VoltarIcon} alt="Voltar" />
          </button>
          <h2>Editar Perfil</h2>
        </div>

        <EditUserArea>
          <AvatarWrapper>
            <Avatar src={avatarPreview} alt="Avatar" />
            <ChangeImageButton onClick={() => fileInputRef.current.click()}>
              <img src={EditImg} alt="Editar" />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </ChangeImageButton>
          </AvatarWrapper>
          <Form onSubmit={handleUpdate}>
            <label>Editar nome:</label>
            <InputGroup>
              <img src={UserIcon} alt="Nome" />
              <Input
                name="nameEdit"
                type="text"
                placeholder="Altere seu nome..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <Divider />
            </InputGroup>

            <label htmlFor="password">Senha:</label>
            <InputGroup>
              <img src={LockIcon} alt="Senha" />
              <Input
                id="passwordEdit"
                type={showPassword ? "text" : "password"}
                placeholder="Altere sua senha..."
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

            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            <div className="botoes">
              <Button
                id="buttonCancelarAlteracao"
                className="botao-cancelar"
                type="button"
                onClick={() => navigate(-1)}
              >
                Cancelar
              </Button>

              <Button
                id="buttonConfirmarAlteracao"
                className="botao-confirmar"
                type="submit"
              >
                Confirmar
              </Button>
            </div>
          </Form>
        </EditUserArea>

        <div className="iconEdit">
          <img src={EditIcon} alt="Editar" />
        </div>
      </Header>

      {/* NOTÍCIAS */}
      <Main></Main>

      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a id="linkContato" href="#">
            Contato
          </a>{" "}
          |{" "}
          <a id="linkPolitica" href="#">
            Política de Privacidade
          </a>{" "}
          |{" "}
          <a id="linkTermo" href="#">
            Termos de Uso
          </a>
        </div>
      </Footer>
    </Container>
  );
};

export default Perfil;
