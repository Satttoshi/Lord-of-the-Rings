import DarkModeSwitch from "../components/dark-mode-switch";
import GlobalStyle from "../styles";
import { ThemeProvider } from "styled-components";

import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", {
    defaultValue: false,
  });

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider
      theme={{
        themeLight: {
          color1: "#282828",
          color2: "#f1f1f1",
          color3: "#d4d1cd",
        },
        themeDark: {
          color1: "#d4d1cd",
          color2: "#282828",
          color3: "#d4d1cd",
        },
      }}
    >
      <GlobalStyle darkMode={darkMode} />
      <DarkModeSwitch onDarkMode={handleDarkMode} darkMode={darkMode} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
