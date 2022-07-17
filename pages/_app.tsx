import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "@up-layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout

  return (
      <>
          {Layout && <Header/>}
        <Component {...pageProps} />
      </>
  )

}

export default MyApp
