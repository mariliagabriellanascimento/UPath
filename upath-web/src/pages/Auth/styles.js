import styled from "styled-components";

/* Breakpoints */
const bp = {
  mobileMax: "767px",
  tabletMin: "768px",
  tabletMax: "1024px", // Tablets “comuns”
  tabletXLMin: "1025px",
  tabletXLMax: "1366px", // Tablets grandes (ex.: iPad Pro)
  desktopMin: "1367px",
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

  @media (max-width: ${bp.mobileMax}) {
    flex-direction: column;
    justify-content: center;
    padding: 24px 16px;
    gap: 16px;
  }

  @media (min-width: ${bp.tabletMin}) and (max-width: ${bp.tabletMax}) {
    gap: 32px;
    padding: 24px 32px;
  }

  @media (min-width: ${bp.tabletXLMin}) and (max-width: ${bp.tabletXLMax}) {
    gap: 40px;
    padding: 32px 48px;
  }

  @media (orientation: portrait) {
    padding-top: 32px;
    padding-bottom: 32px;
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

  /* MOBILE: não exibir a imagem */
  @media (max-width: ${bp.mobileMax}) {
    display: none;
  }

  /* TABLET COMUM */
  @media (min-width: ${bp.tabletMin}) and (max-width: ${bp.tabletMax}) {
    img {
      width: 380px;
    }
  }

  /* TABLET GRANDE */
  @media (min-width: ${bp.tabletXLMin}) and (max-width: ${bp.tabletXLMax}) {
    img {
      width: 480px;
    }
  }

  @media (orientation: landscape) and (min-width: ${bp.tabletMin}) and (max-width: ${bp.tabletMax}) {
    img {
      width: 420px;
    }
  }
`;

export const RightArea = styled.div`
  max-width: 384px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  padding-bottom: 24px;

  .logo-area {
    margin-bottom: 10px;
    text-align: center;

    & .logo-upath {
      width: 175px;
      align-self: center;
    }
  }

  h1 {
    /* Título mais proporcional com clamp */
    font-weight: 900;
    text-align: left;
    width: 100%;
    font-size: clamp(22px, 2.6vw, 28px);
    line-height: 1.2;
  }

  h3 {
    font-weight: 500;
    font-size: clamp(16px, 2.1vw, 20px);
    text-align: left;
    line-height: 1.35;
  }

  .autenticacao {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }

  @media (max-width: ${bp.mobileMax}) {
    .logo-area {
      margin-bottom: 6px;

      & .logo-upath {
        width: 150px;
      }
    }
  }

  @media (min-width: ${bp.tabletXLMin}) and (max-width: ${bp.tabletXLMax}) {
    .logo-area .logo-upath {
      width: 165px;
    }
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
    font-size: clamp(18px, 2.2vw, 24px);
    color: #ffffff;
    font-weight: 600;
    line-height: 1.2;
  }

  & .botao-link {
    display: flex;
    justify-content: end;
  }

  @media (max-width: ${bp.mobileMax}) {
    max-width: 100%;
  }

  @media (min-width: ${bp.tabletMin}) and (max-width: ${bp.tabletMax}) {
    max-width: 360px;
  }

  @media (min-width: ${bp.tabletXLMin}) and (max-width: ${bp.tabletXLMax}) {
    max-width: 380px;
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

  /* Revertido para o seu posicionamento original */
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
  font-size: clamp(16px, 2vw, 20px);
  outline: none;
  width: 100%;
  background: transparent;
  color: #e5e7eb;

  &::placeholder {
    color: #e5e7eb;
  }

  @media (max-width: ${bp.mobileMax}) {
    /* leve ajuste em mobile para espaços */
    padding: 0.6rem 0.5rem 0.6rem 2.8rem;
  }
`;

export const Button = styled.button`
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  background: #10b981;
  color: #ffffff;
  font-size: clamp(16px, 2.1vw, 20px);
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    background: #059669;
  }

  & .seta {
    margin-left: 5px;
  }

  @media (max-width: ${bp.mobileMax}) {
    width: 100%;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #ffffff;
  margin: 10px 0;
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

  /* MOBILE: esconder os botões */
  @media (max-width: ${bp.mobileMax}) {
    display: none;
  }

  /* TABLET COMUM */
  @media (min-width: ${bp.tabletMin}) and (max-width: ${bp.tabletMax}) {
    top: 60px;
    a {
      width: 140px;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }

  /* TABLET GRANDE */
  @media (min-width: ${bp.tabletXLMin}) and (max-width: ${bp.tabletXLMax}) {
    top: 80px;
    a {
      width: 150px;
      img {
        width: 26px;
        height: 26px;
      }
    }
  }

  @media (orientation: landscape) and (min-width: ${bp.tabletMin}) and (max-width: ${bp.tabletXLMax}) {
    top: 40px;
  }
`;

export const ErrorMessage = styled.div`
  color: #ffffff;
  background-color: rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  padding: 5px 10px;
  font-size: clamp(14px, 1.8vw, 16px);
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
`;
