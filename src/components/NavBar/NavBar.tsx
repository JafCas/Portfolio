import React from "react";
import { Container, ButtonContainer, LogoText, OptionText, ThemeButton } from "./styles";

export interface NavBarProps {
  onPress?: () => void;
}

function NavBar({ onPress }: NavBarProps) {
  return (
    // <div style={{ width: "90%", height: "200px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "blue"}}>
      <Container>
        <LogoText>Leonel Castillo</LogoText>
        <ButtonContainer>
          <OptionText onClick={()=>{console.log("Apretao el about")}}>About</OptionText>
          <OptionText>Projects</OptionText>
          <OptionText>Contact</OptionText>
          <ThemeButton>ICON</ThemeButton>
        </ButtonContainer>
      </Container>
    // </div>
  );
}

export default NavBar;
