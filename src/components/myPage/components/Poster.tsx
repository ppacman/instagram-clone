import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem";
const Poster = () => {
  return (
    <Container>
      <PostItemList>
        <PostItem images={"/img/myPage/one.png"}  />
        <PostItem images={"/img/myPage/2.png"} />
        <PostItem images={"/img/myPage/3.png"} />
        <PostItem images={"/img/myPage/4.png"} />
        <PostItem images={"/img/myPage/5.png"} />
        <PostItem images={"/img/myPage/6.png"} />
      </PostItemList>
    </Container>
  );
};

export default Poster;

const Container = styled.div``;
const PostItemList = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;
