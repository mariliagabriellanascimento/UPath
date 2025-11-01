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
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
  border-radius: 0 0 30px 30px;
  height: 100px;
  gap: 30px;

  & .voltar {
    display: flex;
    align-items: center;
    gap: 35px;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  & .iconPlanos {
    img {
      width: 32px;
    }
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

// 🎯 Pacotes
export const PacotesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  justify-content: flex-start;

  .titulo-section {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .cards-pacotes {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
  }

  /* CARD BASE */
  .card-pacote {
    background-color: #fff;
    color: #1f2937;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    padding: 24px;
    width: 100%;
    max-width: 450px;
    max-height: 220px;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .card-pacote:hover {
    transform: scale(1.02);
  }

  /* PREMIUM */
  .card-pacote:nth-child(2) {
    flex-direction: column;
    align-items: start;
    background-color: #1f2937;
    color: #fff;
  }

  .card-premium {
    display: flex;
    gap: 50px;
  }

  /* ----- CABEÇALHO DO CARD (TÍTULO + PREÇO) ----- */
  .titulo-preco-pacote {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 12px;
    gap: 8px;
  }

  .titulo-preco-pacote h2 {
    font-size: 20px;
    font-weight: 700;
  }

  /* BLOCO DE PREÇO (R$, valor e /mês) */
  .titulo-preco-pacote .preco {
    display: flex;
    align-items: flex-end;
    gap: 2px;
  }

  .titulo-preco-pacote .preco h2 {
    font-size: 20px;
    font-weight: 600;
    position: relative;
    bottom: 8px;
  }

  .titulo-preco-pacote .preco span {
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
  }

  .titulo-preco-pacote .preco p {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 3px;
    position: relative;
    top: 12px;
  }

  /* DETALHES */
    .detalhe-pacote {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-top: 8px;
    padding-left: 20px; 
    list-style-type: disc;
  }

  .detalhe-pacote p {
    display: list-item;
    list-style-position: outside;
  }

  /* BOTÃO */
  .acao-pacote {
    margin-top: 16px;
    align-self: center;
  }

  .botao-adquirir {
    min-width: 400px;
    background-color: #7c3aed;
    color: #fff;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }

  .botao-adquirir:hover {
    opacity: 0.9;
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
