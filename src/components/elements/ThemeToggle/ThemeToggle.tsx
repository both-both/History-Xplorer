import { useThemeMode } from "../../../hooks/UseThemeMode/useThemeMode";
import { ThemeToggleStyled } from "./ThemeToggle.Styled";
import { LiaLightbulbSolid } from "react-icons/lia";

export const ThemeToggle = () => {
  const { lightMode, toggleTheme } = useThemeMode();

  return (
    <ThemeToggleStyled
      onClick={toggleTheme}
      aria-pressed={lightMode}
      aria-label={lightMode ? "skift til dark mode" : "skift til light mode"}
    >
      <LiaLightbulbSolid size={40} />
    </ThemeToggleStyled>
  );
};
