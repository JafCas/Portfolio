import React from "react";
// import { Link, NavLink } from "react-router-dom";

import {
  MainContainer,
  MultipleButtonContainer,
  LogoLink,
  ButtonLink,
  ThemeButton,
  LogoContainer,
  ButtonContainer,
  // TestNavLink,
} from "./styles";

export interface NavBarProps {
  onPress?: () => void;
}

function NavBar({ onPress }: NavBarProps) {
  return (
    // <div style={{ width: "90%", height: "200px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "blue"}}>
    <MainContainer>
      <LogoLink to="/">
        <LogoContainer>Leonel Castnz</LogoContainer>
      </LogoLink>
      <MultipleButtonContainer>
        <ButtonLink to="/about">
          <ButtonContainer>About</ButtonContainer>
        </ButtonLink>
        <ButtonLink to="/projects">
          <ButtonContainer>Projects</ButtonContainer>
        </ButtonLink>
        <ButtonLink to="/contact">
          <ButtonContainer>Contact</ButtonContainer>
        </ButtonLink>
        <ThemeButton>ICON</ThemeButton>
      </MultipleButtonContainer>
    </MainContainer>
    // </div>
  );
}

export default NavBar;
