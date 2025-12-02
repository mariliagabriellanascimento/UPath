import styled from "styled-components";

/* Helpers de breakpoints combinando largura e altura para tablets */
const tabletUnified = `
  /* Abrange 768–1180 de largura E 768–1366 de altura */
  (min-width: 768px) and (max-width: 1180px) and (min-height: 768px) and (max-height: 1366px)
`;

/* Orientações específicas para garantir consistência entre vertical e horizontal */
const tabletPortrait = `
  (orientation: portrait) and (min-width: 768px) and (max-width: 1180px) and (min-height: 1024px) and (max-height: 1366px)
`;

const tabletLandscape = `
  (orientation: landscape) and (min-width: 1024px) and (max-width: 1366px) and (min-height: 768px) and (max-height: 1024px)
`;

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #3b82f6;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
  overflow-y: auto;

  /* Celular */
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }

  /* Tablets (regras unificadas de largura + altura) */
  @media ${tabletUnified} {
    justify-content: center;    
    gap: 32px;                 
    padding: 24px;              
  }

  /* Refino por orientação para manter igual comportamento */
  @media ${tabletPortrait} {
    flex-direction: row;        
  }

  @media ${tabletLandscape} {
    flex-direction: row;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  img {
    width: 100%;
    max-width: 550px;
    max-height: 420px;          
    object-fit: contain;
  }

  /* Tablet grande até 1024 de largura */
  @media (max-width: 1024px) {
    img {
      max-width: 320px;
      max-height: 360px;
    }
  }

  /* Tablet médio 820 de largura */
  @media (max-width: 820px) {
    /* Em 820, alguns tablets ficam mais altos; manter consistência */
    flex-direction: column;
    align-items: center;
    img {
      max-width: 280px;
      max-height: 340px;
    }
  }

  /* Regras unificadas para tablets (largura+altura) */
  @media ${tabletUnified} {
    flex-direction: column;    
    align-items: center;
    img {
      max-width: 300px;
      max-height: 360px;
    }
  }

  /* Celular: oculta imagem */
  @media (max-width: 480px) {
    display: none;
  }
`;

export const RightArea = styled.div`
  min-width: 384px;
  display: flex;
  flex-direction: column;
  color: white;

  .logo-area {
    margin-bottom: 10px;
    text-align: center;

    & .logo-upath {
      width: 175px;
      align-self: center;
    }
  }

  h1 {
    font-weight: 900;
    text-align: left;
    width: 100%;
    font-size: clamp(20px, 2.5vw, 28px);
  }

  .cadastro {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 18px;
    }
  }

  /* Tablet: mantemos uma largura máxima para o bloco do form */
  @media ${tabletUnified} {
    min-width: 340px;
    max-width: 420px;
    align-items: center; /* Centraliza conteúdo interno */
  }
`;

export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 378px;

  label {
    text-align: left;
    font-size: clamp(18px, 2vw, 24px);
    color: #ffffff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    label {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    label {
      font-size: 16px;
    }
  }

  @media (max-height: 480px) {
    width: 95%;
    max-width: 350px;
  }

  /* Tablet: ajusta o bloco para caber bem nas 3 resoluções */
  @media ${tabletUnified} {
    max-width: 360px;
  }

  /* Alinha o botão "Cadastrar" à direita dentro do container dele */
  .botao-link {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
    width: 100%;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    top: 30%;
    left: 8px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }

  .eye-icon {
    position: absolute;
    left: 90%; 
    top: 30%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.1s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  padding-left: 2.8rem;
  border: none;
  font-size: clamp(16px, 1.8vw, 20px);
  outline: none;
  width: 100%;
  background: #3b82f6;
  color: #e5e7eb;
  transition: 0.3s ease;

  &::placeholder {
    color: #e5e7eb;
  }

  &.input-error {
    border-radius: 8px;
    background-color: rgba(239, 68, 68, 0.2);
  }
`;


export const Button = styled.button`
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  background: #10b981;
  color: #ffffff;
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  &:hover {
    background: #059669;
  }


  &.botao-cadastrar {
    width: 150px;
  }


  .seta {
    margin-left: 5px;
  }
`;


export const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 1rem 0;
  font-size: 20px;


  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ffffff;
  }


  &:not(:empty)::before {
    margin-right: 32px;
    margin-left: 32px;
  }

  &:not(:empty)::after {
    margin-left: 32px;
    margin-right: 32px;
  }
`;


export const StoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 5px 10px;
    text-decoration: none;
    color: #000;
    width: 160px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    img {
      width: 28px;
      height: 28px;
    }

    div {
      display: flex;
      flex-direction: column;
      line-height: 1.1;


      span {
        font-size: 12px;
        color: #444;
      }

      strong {
        font-size: 15px;
        font-weight: 600;
      }
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  }

  /* Tablets: unificação por largura + altura */
  @media ${tabletUnified} {
    flex-direction: row;
    justify-content: center;
    gap: 14px;
    margin-bottom: 12px;

    a {
      width: 140px;
      padding: 8px;
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #ffffff;
  background-color: rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SuccessToast = styled.div`
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