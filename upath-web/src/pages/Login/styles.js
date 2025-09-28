import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #3b82f6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
  gap: 3rem;
`;

export const LeftArea = styled.div`
  img {
    width: 600px;
  }
`;

export const RightArea = styled.div`
  flex: 1;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  align-items: left;
  color: white;

  .logo-area {
    text-align: center;
    margin-bottom: 30px;
  }

  h1 {
    margin-top: 10px;
    font-weight: 900;
    text-align: left;
    width: 100%;
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
    font-size: 24px;
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

  & .botao-link {
    display: flex;
    justify-content: space-between;
    & .link-esquecimento {
      align-self: center;
    }
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
`;

export const Input = styled.input`
  padding: 0.5rem;
  padding-left: 2.8rem; /* espaço pro ícone */
  border: none;
  font-size: 20px;
  outline: none;
  width: 100%;
  background: #3b82f6;

  &::placeholder {
    color: #e5e7eb;
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

  &.botao-logar {
    width: 103px;
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

export const GoogleButton = styled(Button)`
  background: white;
  color: #1f2937;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244px;
  gap: 10px;
  align-self: center;

  &:hover {
    background: #f5f5f5;
  }
`;

export const LinkText = styled.a`
  font-size: 0.85rem;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
  margin-top: -8px;
  align-self: flex-end;

  &:hover {
    text-decoration: underline;
  }
`;
