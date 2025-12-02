import styled from "styled-components";

// 🎯 Container geral
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #1f2937;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;

  *, *::before, *::after {
    box-sizing: border-box;
  }
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
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #e5e7eb;
    margin: 0;
  }

  @media (max-width: 768px) {
    gap: 12px;

    #iconPerfil {
      width: 44px;
      height: 44px;
    }

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
  gap: 30px;
  padding: clamp(16px, 4vh, 32px) clamp(16px, 6vw, 48px);

  h3 {
    text-align: center;
    font-size: clamp(18px, 3vw, 24px);
    font-weight: 600;
  }
`;

// 🎯 Card da Simulação
export const CardSimulacao = styled.div`
  background-color: #1f2937;
  padding: clamp(20px, 4vw, 30px);
  border-radius: 12px;
  width: 100%;
  max-width: 500px; /* mantém seu limite original */
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

// 🎯 Linha (Curso em cima, Nota embaixo)
export const Linha = styled.div`
  display: flex;
  flex-direction: column;  /* força empilhado */
  gap: 20px;
  width: 100%;
  align-items: center;     /* centraliza os Campos */
  justify-content: center;
`;

// 🎯 Campo (label + input/select) — largura confortável e centrado
export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  width: clamp(180px, 60%, 320px); /* responsivo e centrado */
  max-width: 420px;

  label {
    font-size: clamp(14px, 2.5vw, 18px);
    font-weight: 500;
    margin-bottom: 6px;
    color: #ffffff;
  }

  input,
  select {
    padding: clamp(8px, 2vw, 12px) clamp(10px, 2.5vw, 16px);
    border: none;
    border-radius: 8px;
    font-size: clamp(14px, 2.5vw, 16px);
    outline: none;
    background-color: #1f2937;
    color: #ffffff;
  }

  input::placeholder {
    color: #bbb;
  }
`;

// 🎯 Divider — acompanha a largura do Campo
export const Divider = styled.div`
  border-bottom: 1px solid #ffffff;
  width: 100%;
  max-width: 420px;
  margin-top: 8px;
`;

// (Se usar checkbox futuramente)
export const CheckboxLinha = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    font-size: 14px;
  }

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
  }
`;

// 🎯 Botão Simular
export const BotaoSimular = styled.button`
  background: #7c3aed;
  border: none;
  padding: clamp(10px, 2.5vw, 14px) clamp(20px, 6vw, 35px);
  border-radius: 8px;
  font-size: clamp(16px, 3vw, 20px);
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.2s;
  min-width: clamp(140px, 40%, 200px);

  &:hover {
    background: #7e22ce;
  }

  @media (max-width: 400px) {
    width: 100%; /* ocupa linha inteira se a tela for muito estreita */
  }
`;

// 🎯 Resultado
export const ResultadoBox = styled.div`
  padding: clamp(16px, 3vw, 20px);
  background-color: #111827;
  border: 1px solid #ffffff30;
  border-radius: 12px;
  color: #ffffff;
  font-size: clamp(14px, 2.5vw, 18px);
  line-height: 1.6;
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  text-align: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.4s ease;

  strong {
    color: #3b82f6;
  }

  @keyframes fadeIn {

    from {
      opacity: 0;
      transform: translateY(10px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// 🎯 Rodapé
export const Footer = styled.footer`
  position: relative;
  background-color: #3b82f6;
  color: white;
  text-align: center;
  padding: 16px 0;
  border-radius: 30px 30px 0 0;

  /* Linha curvada sutil no topo (separador) */
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: min(960px, 88vw);
    height: 4px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 9999px; /* efeito pill */
  }

  p {
    font-size: 0.9rem;
    margin: 0;
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
    padding: 14px 0;

    p,
    a {
      font-size: 0.85rem;
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
  color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: transparent;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
    text-align: left;

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
    gap: 14px;

    img {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 768px) {
    width: 200px;
    padding: 16px;
  }
`;