import React from "react";
import styled from "styled-components";

const Saved = () => {
  return (
    <Container>
      <SpanLine>
        <SubText>저장한 내용은 회원님만 볼 수 있습니다</SubText>
        <NewCollectionBtn>+ 새 컬렉션</NewCollectionBtn>
      </SpanLine>
      <DivLine>
        <SavedPosts>
          <Text>모든 게시물</Text>
        </SavedPosts>
      </DivLine>
    </Container>
  );
};

export default Saved;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 935px;
`;
const SpanLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0px 16px;
  font-size: 12px;
`;
const SavedPosts = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(
    to top,
    rgba(38, 38, 38, 0.6),
    rgba(255, 255, 255, 0)
  );
  width: 298px;
  height: 298px;
  border-radius: 4px;
  border: 1px solid rgb(219, 219, 219);
`;
const SubText = styled.div`
  color: #737373;
`;
const NewCollectionBtn = styled.button`
  border: none;
  background-color: #fafafa;
  color: #0095f6;
  font-size: 14px;
  padding: 0px;
`;
const DivLine = styled.div`
  display: flex;
  justify-content: center;
  width: 935px;
`;
const Text = styled.span`
  color: white;
  font-size: 20px;
  margin: 20px;
`;
