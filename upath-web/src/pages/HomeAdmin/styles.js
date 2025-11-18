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

// 🎯 Barra de navegação
export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 24px 0;
  flex-wrap: wrap;
`;

// 🎯 Botões da barra de navegação
export const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  background-color: ${(props) => (props.active ? "#7C3AED" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#1f2937")};
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  box-shadow: ${(props) =>
    props.active
      ? "0 4px 8px rgba(139, 92, 246, 0.3)"
      : "0 2px 6px rgba(0,0,0,0.1)"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  img {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: #7c3aed;
    color: #fff;
  }
`;

// 🎯 Área principal
export const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
`;

// 🎯 Box de conteúdo central
export const ContentBox = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 25px;
  width: 70%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  text-align: center;
  justify-items: center;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 1rem;
    color: #1f2937;
    margin: 12px;
  }

  /* 🎯 Pesquisa de usuário */
  .pesquisa-estudante {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    h3 {
      font-size: 1.2rem;
      color: #1f2937;
      font-weight: 600;
    }

    .input-area {
      display: flex;
      gap: 10px;
      justify-content: center;

      input {
        width: 280px;
        padding: 10px 16px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s;

        &:focus {
          border-color: #7c3aed;
        }
      }

      button {
        background-color: #7c3aed;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
          background-color: #6d28d9;
        }
      }
    }
  }

  /* 🎯 Card do estudante */
  .card-estudante {
    margin-top: 30px;
    background-color: #1f2937;
    color: #ffffff;
    border-radius: 12px;
    padding: 20px 30px;
    width: 520px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: left;
    word-wrap: break-word;

    .info-principal {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 20px;

      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        object-fit: cover;
      }

      .dados {
        h3 {
          font-size: 1.1rem;
          margin-bottom: 6px;
          font-weight: 600;
        }

        p {
          color: #ffffff;
          font-size: 16px;
          margin: 4px 0;
        }

        strong {
          font-weight: 600;
          color: #ffffff;
        }

        .ativo {
          color: #10b981;
          font-weight: 600;
        }

        .inativo {
          color: #ef4444;
          font-weight: 600;
        }

        .sim {
          color: #10b981;
          font-weight: 600;
        }

        .nao {
          color: #ef4444;
          font-weight: 600;
        }
      }
    }

    .acoes-estudante {
      display: flex;
      justify-content: center;
      gap: 12px;

      button {
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s;
      }

      .resetarUser {
        background-color: #e5e7eb;
        color: #9ca3af;
        cursor: not-allowed;
      }

      .bloquearUser {
        background-color: #f97316;
        color: #fff;

        &:hover {
          background-color: #d97706;
        }
      }

      .excluirUser {
        background-color: #ef4444;
        color: #fff;

        &:hover {
          background-color: #dc2626;
        }
      }
    }
  }

  .info-final {
    border-radius: 8px;
    justify-content: center;
    width: 70%;
    display: flex;

    .ultima-atualizacao {
      color: #3b82f6;
      font-weight: 600;
      margin: 12px;
    }
  }

  /* 🎯 Pesquisa de curso */
  .pesquisa-curso {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-top: 30px;
    h3 {
    
      color: #1f2937;
      font-weight: 600;
    }
    .input-area {
      display: flex;
      gap: 10px;  
      justify-content: center;

      input {
        width: 280px;
        padding: 10px 16px; 
        border: 1px solid #d1d5db;
        border-radius: 8px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s;
        &:focus {
          border-color: #7c3aed;
        }
      }

      button {
        background-color: #7c3aed;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.3s;
        &:hover {
          background-color: #6d28d9;
        }
      }
    }
  }

  /* 🎯 Adicionar curso */
  .adicionarCurso {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    .buttonAdicionarCurso {
      background-color: #7c3aed;
      color: #fff;
      border: none;
      border-radius: 8px;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #6d28d9;
      }
    }
  }

  /* 🎯 Card do curso */
  .card-curso {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-color: #FFFFFF;
    color: #3B82F6;
    border-radius: 12px;
    padding: 20px 30px;
    width: 520px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    word-wrap: break-word;
    .dados-curso {
      h3 {
        font-size: 1.1rem;
        margin-bottom: 6px;
        font-weight: 600;
      }
      p {
        color: #3B82F6;
        font-size: 16px;
        margin: 4px 0;
      }
      strong {
        font-weight: 600;
        color: #1F2937;
      }
    }
    
    .info-curso {
    display: flex;
    justify-content: center;

    .curso-instituicao-duracao,
    .area-estado-valor {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      margin: 0 20px;
    }

  }


  .acoes-curso {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 12px;

    button {
      padding: 8px 16px;  
      border: none;
      border-radius: 8px;
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .editarCurso {
      background-color: #F97316;
      color: #fff;
      &:hover {
        background-color: #D97706;
      }
    }

    .excluirCurso {
      background-color: #EF4444;
      color: #fff;
      &:hover {
        background-color: #DC2626;
      }
    }
      
    .vincularBolsa {
      background-color: #7C3AED;
      color: #fff;
      &:hover {
        background-color: #6D28D9;
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

export const RelatoriosContainer = styled.div`
  display: flex;
  background-color: #1f2937;
  padding: 30px;
  border-radius: 12px;
`;

export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: flex-start;
  margin-right: 20px;

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
    text-align: left;
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

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & #checkDadosCursos {
      accent-color: #1f2937;
      height: 20px;
      width: 20px;
    }

    label {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      font-size: 16px;
    }
  }
`;

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
    margin: 0px 24px 0px 24px;
    font-size: 14px;
    color: #ffffff;
    gap: 24px;
  }

  .periodo-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    h3 {
      color: #ffffff;
      font-size: 20px;
    }
    p {
      color: #ffffff;
      font-size: 16px;
      margin: 0;
    }
  }

  label {
    font-weight: bold;
    color: #ffffff;
  }

  select {
    background: #1f2937;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 14px;
    outline: none;
  }

  .toggle-area {
    display: flex;
    align-items: center;
    gap: 10px;

    .dados-active {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 42px;
    height: 24px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    border-radius: 34px;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #7c3aed;
  }

  input:checked + .slider:before {
    transform: translateX(18px);
  }

  .export-buttons {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: #7c3aed;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #6d28d9;
    }
  }
`;
