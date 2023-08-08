import React, { useState, useEffect, useRef } from "react";
import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import Caption from "../components/Caption";
interface EditModalProps {
  image: File;
  handleClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ image, handleClose }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null
  );
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [caption, setCaption] = useState<string>("");

  const handleCaptionChange = (value: string) => {
    const currentAmount = value.length;
    setAmount(currentAmount);
    setCaption(value);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const [dragPosition, setDragPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragStart) {
      const offsetX = e.clientX - dragStart.x;
      const offsetY = e.clientY - dragStart.y;
      setDragPosition({ x: offsetX, y: offsetY });
    }
  };

  const handleDragEnd = () => {
    if (dragPosition) {
      const imageContainer = imageContainerRef.current;
      if (imageContainer) {
        const imageRect = imageContainer.getBoundingClientRect();
        const updatedPosition = {
          x: imageRect.left + dragPosition.x,
          y: imageRect.top + dragPosition.y,
        };
      }
    }
    setDragStart(null);
    setDragPosition(null);
  };

  const handleFormSubmit = async () => {
    try {
      if (!previewImage) {
        return;
      }

      const formData = new FormData();
      formData.append("image", image);
      formData.append("content", caption);

      const token = getToken();

      const response = await fetch("http://localhost:8080/api/post/register", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        console.log("데이터가 백엔드로 성공적으로 전송되었습니다.");
        handleClose();
      } else {
        console.error("데이터 전송 중 오류가 발생했습니다.");
      }
    } catch (error) {
      console.error("오류가 발생했습니다:", error);
    }
  };

  const nextClick = () => {
    if (expanded) {
      handleFormSubmit();
    } else {
      setExpanded(true);
    }
  };

  const deleteClick = () => {
    setExpanded(false);
  };

  return (
    <Background>
      <FormContainer expanded={expanded}>
        <TopContainer>
          <DeleteBox>
            <Delete onClick={deleteClick}>
              <svg
                aria-label="돌아가기"
                className="x1lliihq x1n2onr6"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="2.909"
                  x2="22.001"
                  y1="12.004"
                  y2="12.004"
                ></line>
                <polyline
                  fill="none"
                  points="9.276 4.726 2.001 12.004 9.276 19.274"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polyline>
              </svg>
            </Delete>
          </DeleteBox>
          <TitleContainer>
            <Title>{expanded ? "새 게시물 만들기" : "자르기"}</Title>
          </TitleContainer>
          <NextContainer>
            <Next onClick={nextClick}>{expanded ? "등록하기" : "다음"}</Next>
          </NextContainer>
        </TopContainer>
        <MainContent>
          {previewImage ? (
            <ImageContainer
              ref={imageContainerRef}
              onMouseDown={handleDragStart}
              onMouseMove={handleDrag}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
            >
              <ImageViewer
                ref={imageRef}
                src={previewImage}
                alt="미리보기 이미지"
                style={{
                  transform: `translate(${dragPosition?.x || 0}px, ${
                    dragPosition?.y || 0
                  }px)`,
                }}
              />
            </ImageContainer>
          ) : null}{" "}
          <CaptionContainer expanded={expanded}>
            <AddWrapper>
              <AddBox>
                <InfoWrapper>
                  <InfoBox>
                    <ProfileBox>
                      <Image
                        width={28}
                        height={28}
                        alt={""}
                        src={"/img/whiteProfile.png"}
                      />
                    </ProfileBox>
                    <ProfileName>ppac__man</ProfileName>
                  </InfoBox>
                </InfoWrapper>
                <Caption onChange={handleCaptionChange} amount={amount} />
                <LocationWrapper>
                  <LocationBox>위치 추가</LocationBox>
                  <LocationSvg>
                    <svg
                      aria-label="위치 추가"
                      className="x1lliihq x1n2onr6"
                      color="rgb(115, 115, 115)"
                      fill="rgb(115, 115, 115)"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <title>위치 추가</title>
                      <path d="M12.053 8.105a1.604 1.604 0 1 0 1.604 1.604 1.604 1.604 0 0 0-1.604-1.604Zm0-7.105a8.684 8.684 0 0 0-8.708 8.66c0 5.699 6.14 11.495 8.108 13.123a.939.939 0 0 0 1.2 0c1.969-1.628 8.109-7.424 8.109-13.123A8.684 8.684 0 0 0 12.053 1Zm0 19.662C9.29 18.198 5.345 13.645 5.345 9.66a6.709 6.709 0 0 1 13.417 0c0 3.985-3.944 8.538-6.709 11.002Z"></path>
                    </svg>
                  </LocationSvg>
                </LocationWrapper>
                <AccessibleWrapper>
                  <AccessibleBox>접근성</AccessibleBox>
                  <AccessibleSvg>
                    <svg
                      aria-label="위쪽 V자형 아이콘"
                      className="x1lliihq x1n2onr6"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <title>위쪽 V자형 아이콘</title>
                      <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                    </svg>
                  </AccessibleSvg>
                </AccessibleWrapper>
                <DetailOptionWrapper>
                  <DetailOptionBox>고급 설정</DetailOptionBox>
                  <DetailOptionSvg>
                    <svg
                      aria-label="아래쪽 V자형 아이콘"
                      className="x1lliihq x1n2onr6"
                      color="rgb(0, 0, 0)"
                      fill="rgb(0, 0, 0)"
                      height="16"
                      role="img"
                      viewBox="0 0 24 24"
                      width="16"
                    >
                      <title>아래쪽 V자형 아이콘</title>
                      <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                    </svg>
                  </DetailOptionSvg>
                </DetailOptionWrapper>
              </AddBox>
            </AddWrapper>
          </CaptionContainer>
        </MainContent>
      </FormContainer>
    </Background>
  );
};

export default EditModal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
const MainContent = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FormContainer = styled.div<{ expanded: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 527px;
  height: 569.6px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: width 0.6s ease-in-out;
  ${(props) =>
    props.expanded &&
    css`
      width: 867px; /* 확장된 상태의 넓이 */
    `}
`;
const TopContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
`;
const DeleteBox = styled.div`
  width: 48px;
  height: 42.2px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Delete = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;

const TitleContainer = styled.div`
  width: 407px;
  height: 42.2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
`;

const NextContainer = styled.div`
  width: 60px;
  height: 42.2px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Next = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: rgb(0, 149, 246);
  cursor: pointer;
  &:hover {
    color: rgb(0, 55, 107);
  }
`;
const ImageContainer = styled.div`
  width: 527px;
  height: 526px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  cursor: grab;
`;

const ImageViewer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지를 완전히 덮으면서 비율 유지 */
`;

const CaptionContainer = styled.div<{ expanded: boolean }>`
  width: 340px;
  height: 526.6px;
  border-left: 1px solid rgb(219, 219, 219);
  border-bottom-right-radius: 15px;
  overflow: hidden;
  ${(props) =>
    !props.expanded &&
    css`
      display: none; /* 확장되지 않은 상태에서는 숨깁니다. */
    `}
`;

const AddWrapper = styled.div`
  width: 340px;
  height: 521.325px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
const AddBox = styled.div`
  width: 323.2px;
  height: 431.4px;
`;
const InfoWrapper = styled.div`
  width: 290.4px;
  height: 60px;
  display: flex;
  margin: auto;
  align-items: center;
`;
const InfoBox = styled.div`
  width: 290.4px;
  height: 28px;
  display: flex;
  align-items: center;
`;
const ProfileBox = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 12px;
`;
const ProfileName = styled.div`
  width: 254.4px;
  height: 18px;
  font-size: 14px;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const LocationWrapper = styled.div`
  width: 306.4px;
  height: 44px;
  padding: 0px 8px 0px 8px;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  align-items: center;
`;
const LocationBox = styled.div`
  width: 256.4px;
  height: 30px;
  padding: 4px 9px 4px 9px;
  display: flex;
  align-items: center;
  color: #737373;
`;
const LocationSvg = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  padding-right: 8px;
`;

const AccessibleWrapper = styled.div`
  width: 306.4px;
  height: 44px;
  padding: 0px 8px 0px 8px;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  align-items: center;
`;
const AccessibleBox = styled.div`
  width: 256.4px;
  height: 30px;
  padding: 4px 9px 4px 9px;
  display: flex;
  align-items: center;
`;
const AccessibleSvg = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  padding-right: 8px;
`;

const DetailOptionWrapper = styled.div`
  width: 306.4px;
  height: 44px;
  padding: 0px 8px 0px 8px;
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  align-items: center;
`;

const DetailOptionBox = styled.div`
  width: 256.4px;
  height: 30px;
  padding: 4px 9px 4px 9px;
  display: flex;
  align-items: center;
`;
const DetailOptionSvg = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 8px;
  padding-right: 8px;
`;
