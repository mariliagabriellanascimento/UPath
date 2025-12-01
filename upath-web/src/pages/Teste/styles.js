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
  gap: 20px;
  padding: 30px;
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
  border-radius: 8px;
  padding: 24px;
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 220px;

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
