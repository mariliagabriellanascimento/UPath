import styled from "styled-components";

// 🎯 Container geral
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #1e1e1e;
  background-color: #f8f9fb;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// 🎯 Cabeçalho
export const Header = styled.header`
  background-color: #3174f6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  border-radius: 0 0 12px 12px;

  & .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  & .logo-upath {
    width: 80px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 200px;

  a {
    color: #1f2937;
    font-weight: 700;
    text-decoration: none;
    font-size: 24px;
    transition: 0.3s;
  }

  a.active {
    color: #ffffff;
  }

  a:hover {
    color: #ffffff;
  }
`;

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
  }

  #iconPerfil {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }

  #iconNotificacoes {
    & img {
      width: 36px;
    }
  }
  h3 {
    font-size: 20px;
    color: #ffffff;
  }
  p {
    font-size: 16px;
    color: #e5e7eb;
  }

  user-info {
    display: flex;
  }
`;

// 🎯 Área principal
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 32px 64px;
`;

// 🎯 Boas-vindas
export const WelcomeSection = styled.section`
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 32px 48px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  img {
    width: 300px;
    max-width: 40%;
  }
`;

export const ButtonEscolherTeste = styled.button`
  background-color: #7C3AED;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 16px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 20px;

  &:hover {
    background-color: #7e22ce;
  }
`;

// 🎯 Notícias
export const NoticiasSection = styled.section`
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
`;

export const CardNoticias = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  padding: 12px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h4 {
    font-weight: 700;
    margin-bottom: 4px;
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }
`;

// 🎯 Rodapé
export const Footer = styled.footer`
  background-color: #3174f6;
  color: white;
  text-align: center;
  padding: 16px 0;
  border-radius: 12px 12px 0 0;

  p {
    font-size: 0.9rem;
  }

  div {
    margin-top: 8px;

    a {
      color: #fff;
      margin: 0 6px;
      text-decoration: none;
      font-size: 0.9rem;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

// 🎯 Overlay dos modais
export const ModalOverlay = styled.div`
  position: fixed;
  top: 120px;
  right: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

// 🎯 Modal de Notificações
export const ModalNotificacoes = styled.div`
  background: #3174f6;
  border-radius: 16px;
  padding: 24px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    text-align: center;
    font-weight: 700;
    color: #ffffff;
    text-align: center;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #ffffff;
    color: #1f2937;
    font-weight: 600;
    cursor: pointer;
  }

  #iconVoltar {
    align-self: flex-start;
    background: none;
    color: #000;
  }

  #buttonConfig {
    align-self: center;
    background: none;
    color: #000;
  }

  .modal-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .icon-bolsa {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .icon-bolsa img {
    width: 30px;
  }

  .icon-nota {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .icon-nota img {
    width: 30px;
  }

  .icon-curso {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .icon-curso img {
    width: 30px;
  }
`;

// 🎯 Modal de Links das Notificações
export const ModalLinkNotificacoes = styled(ModalNotificacoes)`
  a {
    color: #3174f6;
    font-weight: 600;
    text-decoration: none;
    margin: 4px 0;
  }

  a:hover {
    text-decoration: underline;
  }
`;

// 🎯 Modal Configurações
export const ModalConfig = styled(ModalNotificacoes)`
  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.95rem;
  }

  input[type="checkbox"] {
    transform: scale(1.2);
  }
`;

// 🎯 Modal Perfil
export const ModalPerfil = styled(ModalNotificacoes)`
  button {
    background-color: #f3f3f3;
    color: #222;
    border: 1px solid #ddd;
  }

  #buttonSair {
    background-color: #ff4d4f;
    color: #fff;
  }

  #buttonConfig {
    background-color: #3174f6;
    color: #fff;
  }

  button:hover {
    opacity: 0.85;
  }
`;
