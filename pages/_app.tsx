import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;


