import styled from "styled-components";

// 🎯 Container geral
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #1f2937;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// 🎯 Cabeçalho
export const Header = styled.header`
  background-color: #3b82f6;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  border-radius: 0 0 30px 30px;

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
    cursor: pointer;
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
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: #1f2937;
    line-height: 1.5;
    margin-bottom: 8px;
  }

  img {
    width: 300px;
    max-width: 40%;
  }

`;

export const ButtonTeste = styled.button`
  background-color: #7c3aed;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  margin: 16px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 20px;

  &:hover {
    background-color: #7e22ce;
  }
`;

export const ButtonSimulacao = styled.button`
  background-color: #7c3aed;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  margin: 16px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 20px;

  &:hover {
    background-color: #7e22ce;
  }
`;

// 🎯 Rodapé
export const Footer = styled.footer`
  background-color: #3b82f6;
  color: white;
  text-align: center;
  padding: 16px 0;
  border-radius: 30px 30px 0 0;

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

  &.modalPerfilOverlay {
    right: 20px;
  }
`;

// 🎯 Modal Perfil
export const ModalPerfil = styled.div`
  background: #3b82f6;
  border-radius: 16px;
  padding: 24px;
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 220px;
  border-radius: 4px;

  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
  }

  button:hover {
    background-color: rgba(31, 41, 55, 0.2);
  }

  a {
    display: inline-block;
    width: 100%;
  }

  a button {
    width: 100%;
  }

  .icon-edit,
  .icon-salvos,
  .icon-planos,
  .icon-sobre,
  .icon-logout {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;