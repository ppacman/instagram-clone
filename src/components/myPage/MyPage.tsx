import React, { useState } from "react";
import styled from "styled-components";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import SelectOption from "./components/SelectOption";

const MyPage = () => {
  const [optionNum, setOptionNum] = useState<number>(1);

  const getOptionNum = (optionNum: number) => {
    setOptionNum(optionNum);
    return optionNum;
  };
  return (
    <Container>
      <PageSet>
        <Profile />
        <SelectOption getOptionNum={getOptionNum} />
        <Content optionNum={optionNum} />
      </PageSet>
      <Footer />
    </Container>
  );
};

export default MyPage;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 100px 0px 150px;

`;
const PageSet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 20px 0px;
  width: 975px;
  height: auto;
  margin-bottom: 30px;
`;
