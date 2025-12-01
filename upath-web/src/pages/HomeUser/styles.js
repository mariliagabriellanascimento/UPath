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

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-upath {
    width: 80px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding: 16px;
  }

  @media (max-width: 768px) {
    .logo-upath {
      width: 60px;
    }
  }
`;

// 🎯 Navegação
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

  @media (max-width: 1024px) {
    gap: 40px;
    a {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    a {
      font-size: 16px;
    }
  }
`;

// 🎯 Área do usuário
export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

// 🎯 Área principal
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 32px 64px;

  @media (max-width: 1024px) {
    padding: 24px;
    gap: 32px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 24px;
  }
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
    border-radius: 12px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 24px;

    img {
      width: 250px;
      max-width: 80%;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;
    img {
      width: 200px;
    }


    h2 {
      font-size: 1.3rem;
    }


    p {
      font-size: 0.85rem;
    }
  }
`;

// 🎯 Botões
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

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
    margin: 8px;
  }
`;

export const ButtonSimulacao = styled(ButtonTeste)`
  background-color: #7c3aed;

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

  @media (max-width: 768px) {
    padding: 12px 0;

    p,
    a {
      font-size: 0.8rem;
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

  @media (max-width: 768px) {
    top: 80px;
    right: 10px;
  }
`;

// 🎯 Modal Perfil
export const ModalPerfil = styled.div`
  background: #3b82f6;
  border-radius: 8px;
  padding: 24px;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: rgba(31, 41, 55, 0.2);
    }
  }

  a {
    display: inline-block;
    width: 100%;
  }

  a button {
    width: 100%;
  }

  .icon-edit,
  .icon-sobre,
  .icon-logout {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 768px) {
    width: 180px;
    padding: 16px;
  }
`;