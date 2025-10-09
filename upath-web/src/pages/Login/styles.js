import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #3b82f6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5%;
`;

export const LeftArea = styled.div`
  img {
    width: 550px;
  }
`;

export const RightArea = styled.div`
  flex: 1;
  max-width: 384px;
  display: flex;
  flex-direction: column;
  color: white;

  .logo-area {
    margin-bottom: 30px;
    align-self: center;
    & img {
      width: 175px;
      }
  }

  h1 {
    margin-top: 10px;
    font-weight: 900;
    align-self: center;
    text-align: center;
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
  padding-left: 2.8rem; /* espaço pro ícone */
  border: none;
  font-size: 20px;
  outline: none;
  width: 100%;
  background: #3b82f6;
  color: #E5E7EB;

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

export const StoreButtons = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 100px;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #ffffff;
    border-radius: 6px;
    padding: 5px 10px;
    text-decoration: none;
    color: #000;
    width: 160px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    img {
      width: 28px;
      height: 28px;
    }

    div {
      display: flex;
      flex-direction: column;
      line-height: 1.1;

      span {
        font-size: 12px;
        color: #444;
      }

      strong {
        font-size: 15px;
        font-weight: 600;
      }
    }

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const ErrorMessage = styled.div`
  color: #FFFFFF;
  background-color:rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  padding: 5px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;
