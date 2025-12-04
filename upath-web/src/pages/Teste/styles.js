import styled from "styled-components";

/* 🎯 Container geral */
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #1f2937;
  background-color: #f3f4f6;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  /* Evita overflow lateral em telas pequenas */
  overflow-x: hidden;

  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

/* 🎯 Cabeçalho */
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

/* 🎯 Navegação */
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

/* 🎯 Área do usuário */
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
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #e5e7eb;
    margin: 0;
  }

  user-info {
    display: flex;
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

/* 🎯 Área principal */
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  /* =========================
     ✅ Responsivo do Chat: input + botão Enviar
     Alvo: elementos dentro de .app-container, sem mudar JSX.
     ========================= */

  /* Limita a largura do conteúdo do chat e centraliza */
  .app-container {
    width: 100%;
    max-width: 960px;
    margin-inline: auto;
  }

  /* Linha de input + botão (se seu Chat usa esta classe) */
  .app-container .chat-input-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: nowrap;
  }

  /* Fallback: mesmo sem .chat-input-row, estiliza input/textarea + botão lado a lado */
  .app-container form {
    /* garante que o rodapé não colida com a sombra do chat */
    margin-bottom: clamp(8px, 2vh, 16px);
  }

  /* Input/textarea se ajustam proporcionalmente */
  .app-container .chat-input-row input,
  .app-container .chat-input-row textarea,
  .app-container input[type="text"],
  .app-container textarea {
    flex: 1 1 auto;       /* ocupa espaço restante */
    min-width: 0;         /* evita overflow em Safari/Android */
    font-size: clamp(12px, 3.2vw, 16px);
    padding: clamp(8px, 2.6vw, 12px) clamp(10px, 3vw, 14px);
    border-radius: 10px;
  }

  /* Botão Enviar proporcional e sem encolher demais */
  .app-container .chat-input-row button,
  .app-container button[type="submit"] {
    flex: 0 0 auto;       /* não expande no lugar do input */
    flex-shrink: 0;       /* não encolhe a ponto de sumir */
    font-size: clamp(12px, 3vw, 16px);
    padding: clamp(8px, 2.4vw, 12px) clamp(12px, 3.2vw, 16px);
    min-width: clamp(72px, 22vw, 96px); /* proporcional à largura da tela */
    border-radius: 10px;
  }

  /* Ajustes finos para viewports bem estreitos */
  @media (max-width: 400px) {
    .app-container .chat-input-row {
      gap: 6px;
    }
    .app-container .chat-input-row button,
    .app-container button[type="submit"] {
      min-width: clamp(68px, 24vw, 88px);
      padding: clamp(7px, 2.2vw, 10px) clamp(10px, 3vw, 14px);
    }
    .app-container .chat-input-row input,
    .app-container input[type="text"],
    .app-container textarea {
      padding: clamp(7px, 2.4vw, 10px) clamp(8px, 2.6vw, 12px);
      font-size: clamp(11.5px, 3.2vw, 15px);
    }
  }

  /* Fallback extremo: se a tela for MUITO estreita, deixamos quebrar para 2 linhas */
  @media (max-width: 330px) {
    .app-container .chat-input-row {
      flex-wrap: wrap;     /* botão pode descer sem cortar */
    }
    .app-container .chat-input-row button,
    .app-container button[type="submit"] {
      width: 100%;         /* ocupa a linha de baixo inteira */
      min-width: auto;
      text-align: center;
    }
  }
`;

/* 🎯 Rodapé */
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

/* 🎯 Overlay dos modais */
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

/* 🎯 Modal Perfil */
export const ModalPerfil = styled.div`
  background: #3b82f6;
  border-radius: 8px;
  padding: 24px;
  width: 220px; /* havia duplicidade; mantemos este */
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: #ffffff;

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
  .icon-salvos,
  .icon-planos,
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

export const Toast = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  background: #1f2937;
  color: #fff;
  padding: 20px 30px;
  border-radius: 12px;
  font-size: 18px;
  text-align: center;
  font-family: "Poppins", sans-serif;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  z-index: 99999;
  animation: fadeInScale 0.25s ease forwards;

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.85);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;    