import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 20px);
  height: 66px;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(248, 237, 235, 0.5);
  margin-top: 10px;
  margin-bottom: 10px;
  border: solid 1px;
  position: fixed;
  /* position: -webkit-sticky;
  position: sticky;
  top: -1px; */
`;

export const MultipleButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 70%;
  height: 300px;
  /* background-color: #000; */
  height: 20px;
`;

export const LogoContainer = styled.div`
  /* background-color: #e29578; */
  display: flex;
  height: 50px;
  align-items: center;
  text-transform: uppercase;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    background-color: #90e0ef;
  }
`;

export const ButtonContainer = styled.div`
  /* background-color: #e29578; */
  display: flex;
  height: 30px;
  align-items: center;
  text-transform: uppercase;
  padding: 10px;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    background-color: #90e0ef;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  margin: 0 15px 0 15px;
  color: #000;
`;

export const ThemeButton = styled.button`
  /* background-color: cyan; */
  border-style: none;
  height: 30px;

  &:hover {
    text-decoration: underline;
    background-color: #a5a58d;
    cursor: pointer;
  }
`