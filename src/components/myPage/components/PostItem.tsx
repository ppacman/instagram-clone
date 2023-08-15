import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import MyDetailPage from "@/components/myDetailPage/MyDetailPage";

interface PostItemProps {
  imageBase64: string;
  caption: string;
  postId: number; 
}

const PostItem: React.FC<PostItemProps> = ({ imageBase64, caption, postId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  


  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Container>
        <HoverDiv onClick={handleImageClick}>
          <Items>
            {/*             
            <Image src={images} width="25" height="25" alt="" />
            <Image src={images} width="25" height="25" alt="" /> */}
          </Items>
        </HoverDiv>
        <div>
          <Image
            src={`data:image/jpeg;base64,${imageBase64}`}
            width="309"
            height="309"
            alt=""
          />
        </div>
        <svg
          aria-label="슬라이드"
          color="rgb(255, 255, 255)"
          fill="rgb(255, 255, 255)"
          height="22"
          role="img"
          viewBox="0 0 48 48"
          width="22"
        >
          <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
        </svg>
      </Container>
      {modalOpen && (
        <>
          <ModalOverlay onClick={handleCloseModal} />
          <MyDetailPage
            image={`data:image/jpeg;base64,${imageBase64}`}
            caption={caption}
            onClose={handleCloseModal}
            postId={postId}
          />
        </>
      )}
    </>
  );
};
export default PostItem;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const Container = styled.div`
  display: flex;
  justify-content: end;
  width: 309px;
  height: 309px;
  svg {
    position: absolute;
    margin: 8px;
  }
`;
const HoverDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  width: 309px;
  height: 309px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
const Items = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
