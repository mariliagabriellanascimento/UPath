import styled from "styled-components";

const bp = {
  sm: "480px",
  md: "767px", // celular “clássico” e alguns tablets em pé
  lg: "1024px", // tablets maiores e notebooks pequenos
};

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #3b82f6;

  /* Fundo estável com zoom */
  min-height: 100svh;
  min-height: 100vh; /* fallback */
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;

  /* Tablet (qualquer orientação): respiro lateral */
  @media (max-width: ${bp.lg}) {
    padding-left: clamp(24px, 4vw, 48px);
    padding-right: clamp(24px, 4vw, 48px);
    justify-content: center;
    gap: 40px;
  }

  /* Tablet em retrato: mais conforto + safe-areas */
  @media (max-width: ${bp.lg}) and (orientation: portrait) {
    padding-left: max(clamp(24px, 4vw, 48px), env(safe-area-inset-left));
    padding-right: max(clamp(24px, 4vw, 48px), env(safe-area-inset-right));
    gap: 32px;
  }

  /* Mobile (retrato): coluna + safe-areas */
  @media (max-width: ${bp.md}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: max(24px, env(safe-area-inset-top));
    padding-bottom: max(24px, env(safe-area-inset-bottom));
    padding-left: max(20px, env(safe-area-inset-left));
    padding-right: max(20px, env(safe-area-inset-right));

    gap: 30px;
    overflow: hidden;
  }

  /* Mobile (landscape): permitir rolagem quando a UI reduz a altura */
  @media (max-width: ${bp.md}) and (orientation: landscape) {
    min-height: 100dvh;
    height: auto;
    overflow-y: auto;
    padding-top: max(24px, env(safe-area-inset-top));
    padding-bottom: max(24px, env(safe-area-inset-bottom));
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

  @media (max-width: ${bp.lg}) {
    img {
      width: 400px;
      max-width: 100%;
      height: auto;
    }
  }

  /* Tablet: organizar verticalmente (botões acima da imagem) */
  @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px; /* espaço entre botões e imagem */
  }

  /* ✅ Ocultar completamente em qualquer celular (retrato) */
  @media (max-width: ${bp.md}) {
    display: none;
  }

  /* ✅ Ocultar também em celulares grandes no modo horizontal */
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  }

  /* ✅ Ocultar em landscape com pouca altura (celular típico) */
  @media (orientation: landscape) and (max-height: 500px) {
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

    @media (max-width: 1366px) {
      .logo-area {
        margin-bottom: 0;
      }
      .logo-upath {
        width: 100px;
      }
    }
  }

  h1 {
    margin-top: 10px;
    font-weight: 900;
    text-align: left;
    width: 100%;
  }

  /* Tablet vertical: não colar nas laterais */
  @media (max-width: ${bp.lg}) and (orientation: portrait) {
    width: 100%;
    max-width: 420px;
  }

  @media (max-width: ${bp.md}) {
    width: 100%;
    max-width: 320px;
    align-items: center;
    text-align: center;

    h1 {
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Evitar overflow em tablets/mobile */
  width: 100%;
  max-width: 378px;

  label {
    text-align: left;
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
  }

  @media (max-width: 1366px) {
    label {
      font-size: 18px;
    }
  }

  p {
    margin-top: 15px;
    font-size: 20px;
    color: #ffffff;
    align-self: center;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;

    &:hover {
      text-decoration: underline;
    }

    &.link-cadastro {
      color: #1f2937;
    }
  }

  & .botao-link {
    display: flex;
    justify-content: space-between;

    & .link-esquecimento {
      align-self: center;
    }
  }

  @media (max-width: ${bp.md}) {
    max-width: 320px;

    label {
      font-size: 18px;
    }

    a {
      font-size: 16px;
    }

    p {
      font-size: 16px;
    }
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

  /* 👁️ Mantido exatamente como estava */
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

  @media (max-width: ${bp.sm}) {
    font-size: 18px;
  }

  @media (max-width: 1366px) {
    font-size: 16px;
    padding: 5px;
    padding-left: 2.8rem;
  }
`;

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

  &.botao-logar {
    width: 103px;
  }

  & .seta {
    margin-left: 5px;
  }

  @media (max-width: 1366px) {
    padding: 10px;
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

  @media (max-width: 1366px) {
    margin: 5px 0;
  }
`;

export const GoogleButton = styled(Button)`
  background: white;
  color: #1f2937;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  gap: 10px;
  align-self: center;

  &:hover {
    background: #f5f5f5;
  }
`;

export const LinkText = styled.a`
  font-size: 0.85rem;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  margin-top: -8px;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;

export const StoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;

  /* Tablet: botões acima da imagem, sem sobrepor */
  @media (min-width: ${bp.md}) and (max-width: ${bp.lg}) {
    position: static;
    top: auto;
    margin-bottom: 8px;
    align-items: center;
    gap: 12px;
  }

  /* ✅ Ocultar em qualquer celular (retrato) */
  @media (max-width: ${bp.md}) {
    display: none;
  }

  /* ✅ Ocultar também em celulares grandes no modo horizontal */
  @media (max-width: 900px) and (orientation: landscape) {
    display: none;
  }

  /* ✅ Ocultar em landscape com pouca altura (celular típico) */
  @media (orientation: landscape) and (max-height: 500px) {
    display: none;
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

export const ErrorMessage = styled.div`
  color: #ffffff;
  background-color: rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;
