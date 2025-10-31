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
  NoticiasSection,
  CardNoticias,
  Footer,
} from "./styles";

import Sisu from "../../assets/sisu.png";
import UFPE from "../../assets/ufpe.jpg";
import UFRPE from "../../assets/ufrpe.jpeg";
import VoltarIcon from "../../assets/seta-voltar.svg";
import UserImg from "../../assets/userImg.svg"
import EditImg from "../../assets/editImg.svg";
import UserIcon from "../../assets/user.svg";
import LockIcon from "../../assets/lock.svg";
import EyeIcon from "../../assets/eye.svg";
import EyeSlashIcon from "../../assets/eye-slash.svg";
import EditIcon from "../../assets/editAtivo.svg";
import { useNavigate  } from "react-router-dom";

const Perfil = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState(UserImg);

  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  useEffect(() => {
    document.title = "Editar Perfil - UPath";
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);

  };

  // Estado das notícias
  const [noticias, setNoticias] = useState([]);

  // Simulação de fetch de notícias
  useEffect(() => {
    const noticiasExemplo = [
      {
        id: 1,
        titulo: "Inscrições do SISU 2025 abertas",
        descricao:
          "Prazo vai de 10 a 15 de fevereiro para universidades públicas de todo o país.",
        imagem: Sisu,
      },
      {
        id: 2,
        titulo: "UFPE lança curso de Design Digital",
        descricao:
          "Graduação voltada para inovação, tecnologia e criatividade.",
        imagem: UFPE,
      },
      {
        id: 3,
        titulo: "UFRPE apresenta Eng. de Software",
        descricao:
          "Curso com foco em programação, projetos e desenvolvimento ágil.",
        imagem: UFRPE,
      },
    ];
    setNoticias(noticiasExemplo);
  }, []);

  return (
    <Container>
      {/* Cabeçalho */}
      <Header>
        <div className="voltar">
          <button id="iconVoltar" onClick={() => navigate(-1)}>
            <img src={VoltarIcon} alt="Voltar" />
          </button><h2>Editar Perfil</h2>
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
          <Form>
            <label>Editar nome:</label>
            <InputGroup>
              <img src={UserIcon} alt="Nome" />
              <Input
                name="nameEdit"
                type="text"
                placeholder="Altere seu nome..."
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
              />

              <img
                src={showPassword ? EyeSlashIcon : EyeIcon}
                alt="Mostrar senha"
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              <Divider />
            </InputGroup>

            <div className="botoes">
              <Button id="buttonCancelarAlteracao" className="botao-cancelar" type="submit">
                Cancelar
              </Button>
              <Button id="buttonConfirmarAlteracao" className="botao-confirmar" type="submit">
                Confirmar
              </Button>
            </div>
          </Form>
        </EditUserArea>
        <div className="iconEdit">
          <img src={EditIcon} alt="Editar" />
        </div>

      </Header>

      {/* Conteúdo Principal */}
      <Main>
        <NoticiasSection>
          <h3>Notícias</h3>
          <div className="cards-container">
            {noticias.map((n) => (
              <CardNoticias key={n.id}>
                <img src={n.imagem} alt={n.titulo} />
                <h4>{n.titulo}</h4>
                <p>{n.descricao}</p>
              </CardNoticias>
            ))}
          </div>
        </NoticiasSection>
      </Main>

      {/* Rodapé */}
      <Footer>
        <p>UPath © 2025 - Todos os direitos reservados</p>
        <div>
          <a id="linkContato" href="#">Contato</a> |
          <a id="linkPolitica" href="#">Política de Privacidade</a> |
          <a id="linkTermo" href="#">Termos de Uso</a>
        </div>
      </Footer>
    </Container>
  );
}

export default Perfil;