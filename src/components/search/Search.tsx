import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputForm from "./components/Input";

const Search = () => {
  return (
    <Wrapper>
      <TopBox>
        <Text>검색</Text>
        <InputForm />
      </TopBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height : 100vh

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopBox = styled.div`
  padding: 20px;
  width: 1200px;
  height: 200px;
  border-bottom: solid grey 0.5px;
`;
const Text = styled.h1`
  margin-bottom: 70px;
`;

export default Search;
