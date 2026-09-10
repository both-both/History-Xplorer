import { useEffect, useState } from "react";

export const useThemeMode = () => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", lightMode);
  }, [lightMode]);

  return { lightMode, toggleTheme: () => setLightMode((prev) => !prev) };
};
