import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* -------------------------------------------------------------------------- */
/*----------------------------------Variables-------------------------------- */
/* -------------------------------------------------------------------------- */
:root{
  --brand-color:#114B5F;
}
/* Document
   ========================================================================== */
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}
body {
  margin: 0;
  font-family:Arial, Helvetica, sans-serif;
  background-color:black;
}
`;

export default GlobalStyle;
