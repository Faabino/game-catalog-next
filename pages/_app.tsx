import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import LayoutNavbar from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Catalog API</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutNavbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
