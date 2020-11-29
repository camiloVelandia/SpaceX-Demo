import {useRouter} from 'next/router'
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import GloblalStyles from '../globlalStyles'

import Header from '../components/Header'
import Footer from '../components/Footer'

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {

  const router = useRouter()
  
  if(router.pathname== '/'){
    return (
      <>
        <Head>
          <title>State X</title>
          <meta property="og:title" content="State x" key="title" />
        </Head>
        <GloblalStyles />
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }

  return (
    <>
      <GloblalStyles />

      <ThemeProvider theme={theme}>
      <Head>
        <title>State X</title>
        <meta property="og:title" content="State x" key="title" />
      </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
