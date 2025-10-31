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
  border-radius: 0 0 12px 12px;
  height: 400px;
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

  & .iconEdit {
    img {
      width: 32px;
    }
  }
`;

export const EditUserArea = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
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
  width: 378px;

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

  & .botoes {
    display: flex;
    align-self: center;
    gap: 30px;
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

  .eye-icon {
    position: absolute;
    left: 340px;
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
  background: #3b82f6;
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
    background: #059669;
    width: 120px;

    &:hover {
      background: #059668e3;
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

// 🎯 Área principal
export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 32px 64px;
`;

// 🎯 Notícias
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

// 🎯 Rodapé
export const Footer = styled.footer`
  background-color: #3b82f6;
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
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;
