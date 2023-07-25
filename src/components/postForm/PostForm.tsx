import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import EditModal from "./components/EditModal";

const PostForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    setShowEditModal(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    setImage(file);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click(); // 파일 선택 창 열기
    }
  };

  return (
    <>
    {!showEditModal && (
      <Background>
        <FormContainer>
          <TitleContainer>
            <FormTitle>새 게시물 만들기</FormTitle>
          </TitleContainer>
          <DragContainer
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <SvgBox>
              <svg
                aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘"
                className="x1lliihq x1n2onr6"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="77"
                role="img"
                viewBox="0 0 97.6 77.3"
                width="96"
              >
                <title>이미지나 동영상과 같은 미디어를 나타내는 아이콘</title>
                <path
                  d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                  fill="currentColor"
                ></path>
                <path
                  d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                  fill="currentColor"
                ></path>
                <path
                  d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                  fill="currentColor"
                ></path>
              </svg>
            </SvgBox>
            <ExplanationBox>
              <Explanation>사진과 동영상을 여기에 끌어다 놓으세요</Explanation>
            </ExplanationBox>
            <ButtonBox>
              <Button onClick={handleButtonClick}>컴퓨터에서 선택</Button>
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </ButtonBox>
          </DragContainer>
        </FormContainer>
      </Background>
    )}
      {showEditModal && image ? (
        <EditModal image={image} handleClose={handleCloseEditModal} />
      ) : null}
    </>
  );
};

export default PostForm;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 배경을 어두운 색상과 투명도로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 569.6px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  width: 527px;
  height: 42.2px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;

const DragContainer = styled.div`
  width: 479px;
  height: 478.6px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

const SvgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Explanation = styled.div`
  width: 361.925px;
  height: 15px;
  margin-top: 16px;
  display: block;
  font-size: 20px;
  font-weight: 400;
  white-space: nowrap; /* 글자가 한 줄에 들어가도록 설정 */
`;
const ExplanationBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  width: 133.85px;
  height: 32px;
  margin: 4px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(0, 149, 246);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgb(24, 119, 242);
  }
`;

const ButtonBox = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const Label = styled.label`
  width: 133.85px;
  height: 32px;
  margin: 4px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color: rgb(0, 149, 246);
  border: none;
  border-radius: 8px;
  cursor: pointer; /* 라벨에 호버 효과 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(24, 119, 242);
  }
`;
