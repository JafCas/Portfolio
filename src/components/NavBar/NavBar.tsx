import React, { useContext, useState } from "react";
// import { ThemeContext } from "../../context/themeContext";
// import "./nav-bar.css";

import {
  MainContainer,
  MultipleButtonContainer,
  LogoLink,
  ButtonLink,
  ThemeButton,
  LogoContainer,
  ButtonContainer,
  ThemeButtonContainer,
  // TestNavLink,
} from "./styles";

export interface NavBarProps {
  onPress?: () => void;
}

function NavBar({ onPress }: NavBarProps) {
  const [currentTheme, setCurrentTheme] = useState("light");
  // let { theme, themeSwitchHandler } = useContext(ThemeContext);

  const themeIconHandler = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
    } else if (currentTheme === "dark") {
      setCurrentTheme("light");
    }
    // themeSwitchHandler(theme);
    console.log("current theme:", currentTheme);
  };

  return (
    // <div style={{ width: "90%", height: "200px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: "blue"}}>
    <MainContainer>
      <LogoLink to="/">
        {({ isActive }) => (
          <LogoContainer className={isActive ? "selected" : undefined}>
            Leonel Castnz
          </LogoContainer>
        )}
      </LogoLink>
      <MultipleButtonContainer>
        <ButtonLink to="/about">
          {({ isActive }) => (
            <ButtonContainer className={isActive ? "selected" : undefined}>
              About
            </ButtonContainer>
          )}
        </ButtonLink>

        <ButtonLink to="/projects">
          {({ isActive }) => (
            <ButtonContainer className={isActive ? "selected" : undefined}>
              Projects
            </ButtonContainer>
          )}
        </ButtonLink>
        <ButtonLink to="/contact">
          {({ isActive }) => (
            <ButtonContainer className={isActive ? "selected" : undefined}>
              Contact
            </ButtonContainer>
          )}
        </ButtonLink>
        <ThemeButton onClick={themeIconHandler} className={currentTheme}>
          ICON
        </ThemeButton>
      </MultipleButtonContainer>
    </MainContainer>
    // </div>
  );
}

export default NavBar;
