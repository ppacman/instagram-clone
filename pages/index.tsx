import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from 'styled-components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <h1>
      메인 페이지 입니다
     </h1>
    </>
  )
}

const Main = styled.div`
  
`