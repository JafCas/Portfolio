import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 20px);
  height: 66px;
  justify-content: space-around;
  align-items: center;
  background-color: #f8edeb;
  margin-top: 10px;
  border: solid 1px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 20%;
  background-color: #fec89a;
  height: 20px;
`;

export const LogoText = styled.div`
  background-color: #e29578;
  text-transform: uppercase;
`;

export const OptionText = styled.button`
  background-color: transparent;
  height: 30px;
  color: #000;
  border-style: none;
  text-transform: uppercase;
  
  &:hover {
    text-decoration: underline;
    background-color: #a5a58d;
  }
`;

export const ThemeButton = styled.button`
  background-color: cyan;
  border-style: none;

  &:hover {
    text-decoration: underline;
    background-color: #a5a58d;
  }
`