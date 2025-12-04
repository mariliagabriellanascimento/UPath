import styled from "styled-components";

// 🎯 Container geral (fundo azul + evitar overflow lateral)
export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  color: #1f2937;
  background-color: #3b82f6; /* azul principal */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden; /* evita faixa branca por overflow */

  /* Box-sizing para evitar que paddings estourem a largura */
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

// 🎯 Cabeçalho (centralizado + ocupa boa parte da tela)
export const Header = styled.header`
  background-color: #3b82f6;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;     /* centro horizontal */
  justify-content: center; /* centro vertical */
  gap: 20px;

  /* 🔑 Faz o header ocupar boa parte da altura da viewport,
     trazendo o conteúdo para o "meio" da página */
  min-height: calc(100vh - 160px);
  /* Ajuste fino: se quiser ainda mais ao centro, aumente esse 160 para 180–200 */

  /* Respiro lateral adaptativo (contido para celulares pequenos) */
  padding: 24px clamp(14px, 4.5vw, 28px);
  border-radius: 0 0 30px 30px;

  /* Lápis removido sem mexer no index */
  .iconEdit {
    display: none;
  }

  .voltar {
    display: flex;
    align-items: center;
    gap: 35px;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    h2 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 700;
      color: #ffffff;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    /* Em mobile, reservamos um pouco mais para rodapé/respirar */
    min-height: calc(100vh - 180px);
    padding: 16px clamp(12px, 5vw, 24px);
    gap: 16px;


    .voltar h2 {
      font-size: 1.6rem;
    }
  }
`;

export const EditUserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* centraliza a área de edição */
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const AvatarWrapper = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

/* botão que abre input file */
export const ChangeImageButton = styled.label`
  display: flex;
  align-items: end;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
    position: relative;
    right: 24px;
  }
  input {
    display: none;
  }
`;

export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* limite confortável de largura e centralização */
  width: 100%;
  max-width: 420px;

  /* respiro lateral leve; não altera ícones */
  padding-inline: clamp(6px, 2.5vw, 12px);

  label {
    text-align: left;
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
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

  .botoes {
    display: flex;
    align-self: center;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .botoes {
      gap: 16px;
    }
  }
`;

export const InputGroup = styled.div`
  /* 🔙 Mantido exatamente como você tinha */
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
    left: 340px;    /* mantém seu posicionamento original */
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
  font-size: 20px;
  outline: none;
  width: 100%;
  background: transparent;
  color: #e5e7eb;

  &::placeholder {
    color: #e5e7eb;
  }
`;

export const Button = styled.button`
  padding: 0.9rem;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &.botao-cancelar {
    background: #ef4444;
    width: 120px;


    &:hover {
      background: #ef4444e3;
    }
  }

  &.botao-confirmar {
    background: #10B981;
    width: 120px;

    &:hover {
      background: #10B981e3;
    }
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

// 🎯 Área principal (mantida apenas como respiro, já que o conteúdo está no Header)
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  /* respiro lateral adaptativo */
  padding: clamp(12px, 4vh, 24px) clamp(14px, 5vw, 28px);
`;

// 🎯 Notícias (mantidas caso você volte com elas futuramente)
export const NoticiasSection = styled.section`
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
  }
`;

export const CardNoticias = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.06);
  padding: 12px;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }

  img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  h4 {
    font-weight: 700;
    margin-bottom: 4px;
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
    color: #1f2937;
  }
`;

// 🎯 Rodapé — linha curvada sutil no topo, mantendo sua paleta
export const Footer = styled.footer`
  position: relative;
  background-color: #3b82f6; /* mantém sua paleta */
  color: white;
  text-align: center;
  padding: 16px 0;
  border-radius: 30px 30px 0 0;

  /* Linha de separação suave (pill) */
  &::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: min(960px, 88vw);
    height: 4px;
    background: rgba(255, 255, 255, 0.65);
    border-radius: 9999px; /* efeito circular/pílula */
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    color: #ffffff;
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