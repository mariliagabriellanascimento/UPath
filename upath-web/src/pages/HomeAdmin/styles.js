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
  border-radius: 0 0 12px 12px;

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
    font-size: 2rem;
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
          color: #FFFFFF;
          font-size: 16px;
          margin: 4px 0;
        }

        strong {
          font-weight: 600;
          color: #FFFFFF
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

    .acoes {
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

      .resetar {
        background-color: #e5e7eb;
        color: #9ca3af;
        cursor: not-allowed;
      }

      .bloquear {
        background-color: #F97316;
        color: #fff;

        &:hover {
          background-color: #d97706;
        }
      }

      .excluir {
        background-color: #EF4444;
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
      color: #3B82F6;
      font-weight: 600;
      margin: 12px;
    }
  }
`;

// 🎯 Rodapé
export const Footer = styled.footer`
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 16px 0;
  border-radius: 12px 12px 0 0;

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

// 🎯 Formulário de atualização de notas
export const FormNotas = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 12px;
  background-color: #1f2937;
  border-radius: 12px;
  padding: 25px;
  width: 40%;
  justify-self: center;

  input {
    width: 100%;
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
    background-color: #10B981;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;

    &:hover {
      background-color: #10a981;
    }
  }
`;

// 🎯 Área de upload de dados
export const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
  border-radius: 12px;
  padding: 30px;
  width: 80%;
  margin: 0 auto;

  h2 {
    color: #3B82F6;
  }

  .resumo {
    background-color: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 20px;
    text-align: left;
    width: 60%;
    font-size: 16px;

    p {
      margin: 8px 0;
      color: #3B82F6;
      strong {
        color: #1f2937;
      }
    }
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

// 🎯 Caixa de sucesso após upload
export const SuccessBox = styled.div`
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 30px 40px;
  text-align: center;
  width: 70%;
  margin: 0 auto;

  h2 {
    color: #3B82F6;
    font-size: 1.8rem;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    color: #3B82F6;
    font-size: 1.1rem;
    margin-bottom: 20px;
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

// 🔹 Overlay central do modal de confirmação
export const ConfirmOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const ConfirmBox = styled.div`
  background-color: #1f2937;
  border-radius: 12px;
  padding: 30px 40px;
  width: 400px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
  animation: aparecer 0.2s ease-in-out;

  @keyframes aparecer {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  p {
    color: #d1d5db;
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .botoes {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    button {
      flex: 1;
      padding: 10px 16px;
      border-radius: 8px;
      font-weight: 600;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
    }

    .confirmar {
      background-color: #10B981;
      color: white;
      &:hover {
        background-color: #059669;
      }
    }

    .cancelar {
      background-color: #EF4444;
      color: white;
      &:hover {
        background-color: #dc2626;
      }
    }
  }
`;
