import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
`;
