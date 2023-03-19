import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const themeLight = {
  color1: "#282828",
  color2: "#f1f1f1",
  color3: "#d4d1cd",
};

const themeDark = {
  color1: "#d4d1cd",
  color2: "#282828",
  color3: "#d4d1cd",
};

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    
  }

  :root {
  /* Color styles */
  --color-earth: ${() => themeLight.color1};
  --color-clouds: ${() => themeLight.color2};
  --color-smoke: ${() => themeLight.color3};

  /* Font styles */
  --font-family: ${lora.style.fontFamily}, serif;
  /*
    use like:
    font: var(--font-body);
  */
  --font-headline-1: normal 700 44px/48px var(--font-family);
  --font-headline-2: normal 700 32px/41px var(--font-family);
  --font-title: normal 700 16px/20px var(--font-family);
  --font-caption: normal 500 12px/15px var(--font-family);
  --font-caption--italic: italic 400 12px/15px var(--font-family);
  --font-body: normal 400 16px/20px var(--font-family);

  /* Effect styles */
  /*
    use like:
    box-shadow: var(--box-shadow-book);
  */
  --box-shadow-book: 0 4px 8px -2px rgba(0, 0, 0, 0.09),
    0 7px 4px -4px rgba(0, 0, 0, 0.07), 0 16px 8px -8px rgba(0, 0, 0, 0.07),
    0 22px 12px -12px rgba(0, 0, 0, 0.07), 0 2px 10px 0 rgba(0, 0, 0, 0.06);

  --box-shadow-book--hover: 0 6px 11px -2px rgba(0, 0, 0, 0.12),
    0 8px 7px -4px rgba(0, 0, 0, 0.09), 0 17px 11px -8px rgba(0, 0, 0, 0.09),
    0 24px 15px -12px rgba(0, 0, 0, 0.09), 0 4px 15px 0 rgba(0, 0, 0, 0.05);

    body{
      background-color: var(--color-clouds);
    }
}

[data-theme="dark"] {
  --color-earth: ${() => themeDark.color1};
  --color-clouds: ${() => themeDark.color2};
  --color-smoke: ${() => themeDark.color3};
  body{
      background-color: var(--color-clouds);
    }
}

body{
      margin: 0;
      font-family: var(--font-family);
      transition: background-color 0.3s ease-out;
    }


`;
