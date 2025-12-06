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

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    gap: 10px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    .logo-upath {
      width: 60px;
    }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

// 🎯 Área principal
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
  gap: 16px;

  h1 {
    color: #1f2937;
    font-size: 36px;
    margin-bottom: 20px;
  }

  .kpi-row {
    display: flex;
    gap: 16px;
    justify-content: center;
    width: 100%;
    max-width: 900px;
  }

  .kpi-card {
    background: #020617;
    border-radius: 16px;
    padding: 12px 20px;
    min-width: 220px;
    text-align: center;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.6);

    h4 {
      font-size: 0.9rem;
      color: #9ca3af;
      margin-bottom: 4px;
    }

    strong {
      font-size: 1.6rem;
      color: #e5e7eb;
    }
  }

  @media (max-width: 1024px) {
    padding: 24px;

    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    h1 {
      font-size: 22px;
      text-align: center;
    }

    .kpi-row {
      flex-direction: column;
      align-items: center;
    }
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

  @media (max-width: 768px) {
    padding: 12px 0;

    p,
    a {
      font-size: 0.8rem;
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

  @media (max-width: 768px) {
    top: 80px;
    right: 10px;
  }
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

  @media (max-width: 768px) {
    width: 180px;
    padding: 16px;
  }
`;

// 🎯 Container dos relatórios (layout em 2 colunas)
export const RelatoriosContainer = styled.div`
  background-color: #0b1220;
  padding: 30px 32px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1.1fr 1.4fr;
  gap: 32px;
  max-width: 900px;
  width: 100%;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.8);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 24px;
  }

  @media (max-width: 768px) {
    padding: 16px;
    gap: 20px;
  }
`;

// 🎯 Filtros
export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;

  .intro-text h1 {
    color: #ffffff;
    font-size: 28px;
    margin-bottom: 4px;
  }

  .intro-text p {
    color: #d1d5db;
    font-size: 14px;
    margin: 0;
  }

  .tipo-relatorio-select,
  .periodo-select {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  label {
    font-weight: 600;
    color: #ffffff;
    font-size: 16px;
  }

  select {
    background: #020617;
    color: #ffffff;
    border: 1px solid #374151;
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 14px;
    outline: none;
  }

  .botao-link {
    margin-top: 8px;
  }

  @media (max-width: 1024px) {
    align-items: stretch;

    .intro-text h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 768px) {
    gap: 20px;

    .intro-text h1 {
      font-size: 20px;
    }

    select {
      font-size: 13px;
      padding: 6px 10px;
    }
  }
`;

// 🎯 Gráfico
export const GraficoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #e5e7eb;
  gap: 12px;

  .grafico-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 8px;

    h2 {
      font-size: 1.2rem;
      margin: 0;
    }

    .sub {
      font-size: 0.8rem;
      color: #9ca3af;

      strong {
        color: #e5e7eb;
      }
    }
  }

  .grafico-barras {
    margin-top: 4px;
    height: 260px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    background: #020617;
    border-radius: 16px;
    box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.9);
  }

  .sem-dados {
    color: #9ca3af;
    font-size: 0.85rem;
  }

  .coluna {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .valor {
    font-size: 0.75rem;
    color: #9ca3af;
  }

  .barra {
    width: 26px;
    border-radius: 999px;
    background: linear-gradient(180deg, #6366f1, #4f46e5);
    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  }

  .barra:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(79, 70, 229, 0.4);
    opacity: 0.95;
  }

  .label {
    font-size: 0.75rem;
    color: #9ca3af;
  }

  @media (max-width: 1024px) {
    .grafico-barras {
      flex-wrap: wrap;
      justify-content: center;
      height: auto;
      min-height: 200px;
    }
  }

  @media (max-width: 768px) {
    .barra {
      width: 20px;
    }

    .grafico-header h2 {
      font-size: 1rem;
    }
  }
`;

// 🎯 Botão
export const Button = styled.button`
  background-color: #7c3aed;
  color: white;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #7e22ce;
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;
