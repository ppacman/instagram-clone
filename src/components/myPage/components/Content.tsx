import React from "react";
import styled from "styled-components";
import Poster from "./Poster";
import Saved from "./Saved";
import Taged from "./Taged";

interface ContentProps {
  optionNum: number;
}
const Content = ({ optionNum }: ContentProps) => {
  return (
    <Container>
      {optionNum == 1 ? <Poster /> : optionNum == 2 ? <Saved /> : <Taged />}
    </Container>
  );
};

export default Content;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
