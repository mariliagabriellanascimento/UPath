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
  max-width: 384px;
  display: flex;
  flex-direction: column;
  color: white;
  position: relative;
  padding-bottom: 300px;

  .logo-area {
    margin-bottom: 10px;
    text-align: center;
    
    & .logo-upath {
      width: 175px;
      align-self: center;
      }
  }

  h1 {
    
    font-weight: 900;
    text-align: left;
    width: 100%;
  }

  h3 {
    font-weight: 500;
    font-size: 20px;
    text-align: left;
  }

  .autenticacao {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 378px;

  label {
    text-align: left;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: 600;
  }

  & .botao-link {
    display: flex;
    justify-content: end;
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
  background: transparent;
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

  & .seta {
    margin-left: 5px;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: #ffffff;
  margin: 10px;
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
  color: #ffffff;
  background-color: rgba(31, 41, 55, 0.25);
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
`;

