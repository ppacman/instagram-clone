import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styled from "styled-components";

import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     console.log("hi");
  //     const url = "http://localhost:8080/api/post/all";
  //     const option = {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await fetch(url, option);
  //     const result = await response.json();
  //     console.log(result);
  //   })();
  // }, []);
  return (
    <>
      <h1>메인 페이지 입니다</h1>
    </>
  );
}

const Main = styled.div``;
