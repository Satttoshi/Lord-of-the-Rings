import DarkModeSwitch from "../components/dark-mode-switch";
import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useLocalStorageState("darkMode", {
    defaultValue: false,
  });

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <DarkModeSwitch onDarkMode={handleDarkMode} darkMode={darkMode} />
      <Component {...pageProps} />
    </>
  );
}
