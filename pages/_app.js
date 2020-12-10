import React, { useState } from "react";

import {useRouter} from 'next/router'
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import GloblalStyles, {Button} from '../globlalStyles'


import Header from '../components/Header'
import Footer from '../components/Footer'




const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  Alpha: "rgba(255,255,255,.7)",
};

export const darkTheme = {
  body: "#000",
  Alpha: "rgba(0,0,0,.8)",
  text: "#FAFAFA",
};


export default function App({ Component, pageProps }) {

const [theme, setTheme] = useState("dark");

// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === "light") {
    setTheme("dark");
    // otherwise, it should be light
  } else {
    setTheme("light");
  }
};


  const router = useRouter()
  
  if(router.pathname== '/'){
    return (
      <>
        <Head>
          <title>State X</title>
          <meta property="og:title" content="State x" key="title" />
        </Head>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme }>
          <GloblalStyles />
          <Header />
          <Button onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GloblalStyles />
        <Head>
          <title>State X</title>
          <meta property="og:title" content="State x" key="title" />
        </Head>
        <Header />
        <Button onClick={toggleTheme}>{theme === 'light'? '🌙': '☀️' }</Button>

        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
