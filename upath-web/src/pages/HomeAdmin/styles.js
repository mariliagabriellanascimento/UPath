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
  background-color: #1f2937;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  border-radius: 0 0 30px 30px;

  .logo-upath {
    width: 80px;
  }
`;

// 🎯 Área do usuário (lado direito do cabeçalho)
export const UserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

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
`;

// 🎯 Área principal
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;

  h1 {
    color: #1f2937;
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

// 🎯 Rodapé
export const Footer = styled.footer`
  background-color: #1f2937;
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

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

// 🎯 Modal Overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 120px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

// 🎯 Modal Perfil
export const ModalPerfil = styled.div`
  border-radius: 4px;
  background-color: #1f2937;
  padding: 24px;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    background-color: transparent;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: rgba(31, 41, 55, 0.2);
    }
  }

  .icon-logout {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

// 🎯 Container dos relatórios
export const RelatoriosContainer = styled.div`
  display: flex;
  background-color: #1f2937;
  padding: 30px;
  border-radius: 12px;
  gap: 30px;
`;

// 🎯 Filtros
export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;

  h1 {
    color: #ffffff;
    font-size: 32px;
  }

  p {
    color: #ffffff;
    font-size: 16px;
    text-align: left;
    margin: 0;
  }

  .tipo-relatorio-select,
  .periodo-select {
    display: flex;
    flex-direction: column;
  }

  label {
    font-weight: bold;
    color: #ffffff;
    font-size: 20px;
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
`;

// 🎯 Gráfico
export const GraficoContainer = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 40px;

  h2 {
    margin-bottom: 10px;
    color: #ffffff;
    font-size: 24px;
  }

  .grafico-barras {
    display: flex;
    align-items: flex-end;
    height: 200px;
    gap: 10px;
    background: #ffffff;
    padding: 10px;
    border-radius: 8px 8px 0 0;
  }

  .barra {
    width: 40px;
    background: #3b82f6;
    border-radius: 8px 8px 0 0;
  }

  .legenda {
    display: flex;
    justify-content: space-between;
    margin: 0px 24px;
    font-size: 14px;
    color: #ffffff;
    gap: 24px;
  }
`;