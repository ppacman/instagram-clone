import React from "react";
import styled from "styled-components";

const SignupBox = () => {
  return (
    <Wrapper>
      <TypoBox>
        <Typo>계정이 없으신가요?</Typo>
        <LinkTypo>가입하기</LinkTypo>
      </TypoBox>
    </Wrapper>
  );
};

export default SignupBox;
const Wrapper = styled.div`
  border: 1px solid rgb(219, 219, 219);
  width: 348.4px;
  height: 41px;
  border-radius: 1px;
  display: flex;
  margin: 0 0 10px;
  padding: 10px 0;
  position: relative;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center;
`;

const TypoBox = styled.div`
  font-size: 14px;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: center;
`;

const Typo = styled.div`
  display: block;
  color : rgb(0,0,0);
  text-align: center;
  margin-right:0px;
 
  
`;
const LinkTypo = styled.button`
  display: block;
  font-weight: 600;
  font-size: 14px;
  color : rgb(0, 149, 246);
  border: none;
  background-color: white;
  cursor: pointer;


`

