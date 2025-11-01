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
  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 24px;
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
