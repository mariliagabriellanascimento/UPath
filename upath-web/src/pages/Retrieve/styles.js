import styled from "styled-components";

/* Breakpoints — ajuste se preferir outros valores */
const bp = {
  sm: "480px",   // smartphone
  md: "768px",   // tablets menores
  lg: "1024px",  // tablets maiores / laptops
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

  /* Em tablets: manter layout confortável sem estourar */
  @media (max-width: ${bp.lg}) {
    padding: 0 4%;
    gap: 24px;
  }

  /* Em mobile: foco no formulário (mantém web igual sem mudar comportamento) */
  @media (max-width: ${bp.md}) {
    justify-content: center;
    padding: 24px 20px;
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

  /* Em tablets menores: reduz um pouco a imagem para caber melhor */
  @media (max-width: ${bp.lg}) {
    img {
      width: 420px;
    }
  }

  /* Em mobile: oculta a imagem (como você pediu) */
  @media (max-width: ${bp.md}) {
    img {
      display: none;
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

  .esquecimento {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }

  /* Tablets: manter tudo cabendo sem overflow */
  @media (max-width: ${bp.lg}) {
    padding-bottom: 220px;
  }

  /* Mobile: reduzir o padding-bottom para evitar rolagem desnecessária */
  @media (max-width: ${bp.md}) {
    padding-bottom: 120px;
  }
`;

export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* Evita overflow em telas menores mantendo o limite de largura */
  width: 100%;
  max-width: 378px;

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

  /* Em tablets/celular, manter espaçamento confortável sem alterar botões */
  @media (max-width: ${bp.md}) {
    gap: 0.75rem;
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

  @media (max-width: ${bp.md}) {
    img {
      top: 50%;
    }
  }
`;

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

  /* Em células e tablets pequenos, evitar quebra de linha feia */
  @media (max-width: ${bp.sm}) {
    font-size: 18px;
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

  &.botao-cadastrar {
    width: 150px;
  }

  & .seta {
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

  /* Em celular: ocultar os botões (como você pediu) */
  @media (max-width: ${bp.md}) {
    display: none;
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