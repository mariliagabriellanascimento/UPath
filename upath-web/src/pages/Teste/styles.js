import styled from "styled-components";

// 🎯 Container geral
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #1f2937;
  background-color: #F3F4F6;
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

// 🎯 Escolha de Teste
export const EscolherTesteSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  border-radius: 16px;

  h2 {
    font-size: 22px;
    font-weight: 700;
    color: #1F2937;
  }

  .cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    width: 100%;
    max-width: 600px;
  }
`;

export const CardTeste = styled.div`
  background-color: ${({ className }) =>
    className === "premium" ? "#1F2937" : "#fff"};

  color: ${({ className }) => (className === "premium" ? "#fff" : "#111827")};
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
    max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }

  ul {
    list-style: disc;
    padding: 0;
    margin: 0;
  }
`;

export const CardTitulo = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 6px;
  color: ${({ tipo }) => (tipo === "premium" ? "#ffffff" : "#3b82f6")};
`;

export const CardDescricao = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: ${({ tipo }) => (tipo === "premium" ? "#ffffff" : "#3b82f6")};
`;

export const CardItem = styled.li`
  font-size: 16px;
  margin-left: 8px;
  color: ${({ tipo }) => (tipo === "premium" ? "#ffffff" : "#1F2937")};
`;

export const ButtonTeste = styled.button`
  align-self: flex-end;
  background-color: ${({ className }) =>
    className === "premium-btn" ? "#7C3AED" : "#7C3AED"};
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const FooterInfo = styled.p`
  font-size: 12px;
  color: #000000;
  text-align: center;
  margin-top: 8px;
  max-width: 500px;
`;

// 🎯 Rodapé
export const Footer = styled.footer`
  background-color: #3b82f6;
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

  &.modalPerfilOverlay {
    right: 20px;
  }
`;

// 🎯 Modal de Notificações
export const ModalNotificacoes = styled.div`
  background: #3b82f6;
  border-radius: 16px;
  padding: 24px;
  width: 330px;
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
    gap: 25px;

    & img {
      width: 24px;
    }
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
export const ModalLinkNotificacoes = styled.div`
  background-color: #3b82f6;
  color: white;
  width: 380px;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);

  .modal-header {
    display: flex;
    align-items: center;
    gap: 12px;

    h3 {
      font-size: 20px;
      font-weight: 700;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    img {
      width: 22px;
    }
  }

  .notificacoes-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .notificacao-card {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    background-color: #fff;
    color: #1f2937;
    border-radius: 12px;
    padding: 12px 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }

    .icon-bolsaLink img,
    .icon-notaLink img,
    .icon-cursoLink img {
      width: 28px;
      height: 28px;
    }

    .notificacao-info {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    h4 {
      font-size: 16px;
      font-weight: 700;
      margin: 0;
      margin-bottom: 4px;
    }

    p {
      font-size: 14px;
      color: #1f2937;
      margin: 0;
      margin-bottom: 4px;
    }

    span {
      font-size: 12px;
      color: #3b82f6;
      text-align: right;
      align-self: flex-end;
    }
  }
`;

// 🎯 Modal Configurações
export const ModalConfig = styled.div`
  background: #3b82f6;
  color: #fff;
  width: 360px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    h3 {
      font-size: 20px;
      font-weight: 600;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    img {
      width: 22px;
      height: 22px;
    }
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .toggle-area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .nots-active {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 42px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #1f2937;
  }

  input:checked + .slider:before {
    transform: translateX(18px);
  }

  .checkbox-group {
    display: flex;

    flex-direction: column;
    gap: 8px;

    & #checkBolsas,
    #checkNotas,
    #checkCursos,
    #checkNotificacoesPref {
      accent-color: #ffffff;
      height: 18px;
      width: 18px;
    }

    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      font-size: 16px;
    }
  }

  .filter-group {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 14px;
    }

    select {
      background: #3b82f6;
      color: #ffffff;
      border: none;
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 14px;
      outline: none;
    }
  }
`;

// 🎯 Modal Perfil
export const ModalPerfil = styled(ModalNotificacoes)`
  width: 220px;
  border-radius: 4px;

  button {
    background-color: transparent;
    color: #fff;
  }

  button:hover {
    background-color: rgba(31, 41, 55, 0.2);
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
