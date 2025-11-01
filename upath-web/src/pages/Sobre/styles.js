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

  & .iconSobre {
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
export const EquipeSection = styled.section`
  text-align: center;

  .titulo-section {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .cards-equipe {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: center;
  }

  .card-membro {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    text-align: center;
    width: 300px;
    transition: transform 0.2s;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 12px;
    }

    h2 {
      font-size: 24px;
      margin: 8px 0;
      color: #000000;
    }

    p {
      font-size: 16px;
      color: #1F2937;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
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
