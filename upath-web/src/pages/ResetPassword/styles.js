import styled from "styled-components";

/* Breakpoints fixos */
const BP_TABLET_MIN = 768;
const BP_TABLET_MAX = 1366;

/* ===== CONTAINER ===== */
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #3b82f6;

  /* Fundo que acompanha zoom/viewport dinâmico */
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
  width: 100%;

  /* MOBILE: coluna, centralizado e com espaçamento */
  @media (max-width: ${BP_TABLET_MIN - 1}px) {
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 16px;
  }

  /* TABLET: leve ajuste no espaçamento lateral */
  @media (min-width: ${BP_TABLET_MIN}px) and (max-width: ${BP_TABLET_MAX}px) {
    padding: 0 3.5%;
  }
`;

/* ===== LEFT AREA ===== */
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

  @media (max-width: 1024px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 768px) {
    display: none; /* Oculta imagem no mobile */
  }
`;

/* ===== RIGHT AREA ===== */
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
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    text-align: left;
  }

  .redefinir {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }

  /* TABLET: leve ajuste de tipografia/padding */
  @media (min-width: ${BP_TABLET_MIN}px) and (max-width: ${BP_TABLET_MAX}px) {
    max-width: clamp(360px, 42vw, 480px);
    padding-bottom: 120px;

    h3 {
      font-size: 18px;
    }
  }

  /* MOBILE */
  @media (max-width: ${BP_TABLET_MIN - 1}px) {
    max-width: none;
    width: 100%;
    padding-bottom: 0;

    .logo-area .logo-upath {
      width: clamp(140px, 40vw, 175px);
    }

    h1 {
      font-size: clamp(20px, 6vw, 24px);
    }

    h3 {
      font-size: clamp(14px, 4.5vw, 16px);
    }
  }
`;

/* ===== FORM ===== */
export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 378px;

  label {
    text-align: left;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 20px;
    color: #FFFFFF;
    align-self: center;
  }

  a {
    color: #FFFFFF;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
  }

  & .botao-link {
    display: flex;
    justify-content: end;
  }

  .redefinir{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  /* TABLET: largura fluida */
  @media (min-width: ${BP_TABLET_MIN}px) and (max-width: ${BP_TABLET_MAX}px) {
    width: 100%;
    max-width: 460px

    label {
      font-size: 20px;
    }
  }

  /* MOBILE */
  @media (max-width: ${BP_TABLET_MIN - 1}px) {
    width: 100%;

    label {
      font-size: 16px;
    }
  }
`;

/* ===== INPUT GROUP ===== */
export const InputGroup = styled.div`
  position: relative;
  width: 100%;

  /* Ícone do cadeado — volta ao original */
  img {
    position: absolute;
    top: 30%;
    left: 8px;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
  }

  /* Ícone do olho — volta ao original */
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

/* ===== INPUT ===== */
export const Input = styled.input`
  padding: 0.5rem;
  padding-left: 2.8rem;
  border: none;
  font-size: 20px;
  outline: none;
  width: 100%;
  background: transparent;
  color: #E5E7EB;


  &::placeholder {
    color: #e5e7eb;
  }
`;

/* ===== BUTTON ===== */
export const Button = styled.button`
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  background: #10b981;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #059669;
  }

  &.botao-cadastrar {
    width: 150px;
  }

  & .seta {
    margin-left: 5px;
  }
`;

/* ===== DIVIDER ===== */
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

/* ===== STORE BUTTONS ===== */
export const StoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    display: none; /* Oculta botões no mobile */
  }

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
`;

/* ===== ERROR MESSAGE ===== */
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