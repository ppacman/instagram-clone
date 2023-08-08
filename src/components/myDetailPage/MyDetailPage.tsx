import React from "react";
import styled from "styled-components";

interface ModalProps {
  image: string; // 이미지 URL 문자열로 가정
  caption: string;
  onClose: () => void;
}

const MyDetailPage: React.FC<ModalProps> = ({ image, caption, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <ImageContainer>
          <Image src={image} alt="상세 이미지" />
        </ImageContainer>
        <Caption>{caption}</Caption>
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MyDetailPage;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px; /* 필요에 따라 최대 너비 조정 */
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  max-height: 300px; /* 필요에 따라 최대 높이 조정 */
  object-fit: cover;
`;

const Caption = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
