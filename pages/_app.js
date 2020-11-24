import {useRouter} from 'next/router'

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
    <GloblalStyles/>
      <ThemeProvider theme={theme}>
      <Header/>
        <Component {...pageProps} />
       <Footer/> 
      </ThemeProvider>
    </>
  );
}
