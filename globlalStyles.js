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
  color:white
}

/* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 18px;
  right: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: white;
  height:10px;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: white;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 12px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: #bdc3c7;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
  top:0;
  overflow:hidden;
  overflow-y:hidden;
}

/* General sidebar styles */
.bm-menu {
  overflow:hidden;
  overflow-y:hidden;
  background: black;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
  overflow:hidden;
  overflow-y:hidden;
}


/* Wrapper for item list */
.bm-item-list {
  display:flex;
  justify-content:center;
  align-items:center;
  padding: 0.8em;
  overflow:hidden;
  overflow-y:hidden;
  flex-direction:column;
  height:50vh;
  & li{
    margin-top:-30px;
    padding-bottom:50px;
    outline:none;
  }
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
  overflow:hidden;
  overflow-y:hidden;
}
`;

export default GlobalStyle;
