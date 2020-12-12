import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  position: fixed;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 150px;
  z-index: 10;
  outline: none;
  box-shadow: 0px 0px 7px 1px ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    right: 15px;
    top: 100px;
  }
`;


const GlobalStyle = createGlobalStyle`
/* -------------------------------------------------------------------------- */
/*----------------------------------Variables-------------------------------- */
/* -------------------------------------------------------------------------- */
:root{
  --back-color:${({ theme }) => theme.Alpha};
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
  background-color:${({ theme }) => theme.body} ;
  color:${({ theme }) => theme.text};
  transition: all 0.25s linear;
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
  background:${({ theme }) => theme.text};
  height:10px;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: ${({ theme }) => theme.text};
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  top:15px;
  right:15px;
  width:55px;
  height:55px;
  margin-top:15px;
  margin-right:15px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: white;
  height:30px;
  
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
  fill: ${({ theme }) => theme.body};
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
    color: ${({ theme }) => theme.body};
  }
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  background: ${({ theme }) => theme.text};
  overflow:hidden;
  overflow-y:hidden;
}

.resultContainer{
  margin:0 auto;
   width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
}

.result{
  padding-top:140px;
  & .result-title{
    font-size:28px;
    text-align:center;
    & span{
      font-weight:700;
      text-transform:capitalize;
    }
  }
}
`;

export default GlobalStyle;
