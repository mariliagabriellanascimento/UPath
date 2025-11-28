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
  gap: 30px;
  padding: 32px 64px;

  h3 {
    text-align: center;
    font-size: 20px;
  }
`;

export const CardSimulacao = styled.div`
  background-color: #1f2937;
  padding: 30px;
  border-radius: 12px;
  width: 50%;
  max-width: 500px;
  margin: 0 auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Linha = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
`;

export const Campo = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;

  label {
    font-size: 20px;
    weight: 500;
    margin-bottom: 5px;
  }

  input {
    padding: 10px 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
    background-color: #1f2937;
    color: #ffffff;

    &::placeholder {
      color: #ffffff;
      }

    &:focus {
      border-color: #ffffff;
    }
  }

  select {
    background: #1f2937;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    padding: 8px 12px;
    font-size: 16px;
    outline: none;  
  }

  input::placeholder {
    color: #bbb;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  border-bottom: 1px solid #ffffff;
  width: 160px;
`;

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

export const BotaoSimular = styled.button`
  background: #7c3aed;
  border: none;
  padding: 12px 35px;
  border-radius: 8px;
  font-size: 20px;
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #7e22ce;
  }
`;

export const ResultadoBox = styled.div`
  padding: 20px;
  background-color: #111827;
  border: 1px solid #ffffff30;
  border-radius: 12px;
  color: #ffffff;
  font-size: 18px;
  line-height: 1.6;
  width: 100%;         
  max-width: 400px;    
  margin: 20px auto;   
  text-align: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  animation: fadeIn 0.4s ease;
  box-sizing: border-box;  /* <-- evita aumentar tamanho com padding */

  strong {
    color: #3b82f6; /* Azul elegante para destaque */
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