import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Taged = () => {
  return (
    <Container>
      <Imgs />
      <BoldSpan>내가 나온 사진</BoldSpan>
      <SubSpan>
        사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에 표시됩니다.
      </SubSpan>
    </Container>
  );
};

export default Taged;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 60px 44px;
  width: 350px;
`;
const Imgs = styled.div`
  background-image: url(https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png);
  background-repeat: no-repeat;
  background-size: 440px 411px;
  background-position: -189px -288px;
  height: 62px;
  width: 62px;
`;
const BoldSpan = styled.span`
  font-size: 30px;
  font-weight: 800;
`;
const SubSpan = styled.span`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 350px;
  text-align: center;
  margin-bottom: 20px;
`;
