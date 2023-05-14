import '@/styles/globals.css'
import { ThemeProvider } from 'styled-components';
import { colors, GlobalStyles } from '../themes/ThemeConfig';


export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
