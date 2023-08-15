import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import whiteProfile from "../../../public/img/whiteProfile.png";
import axios from "axios";

interface ModalProps {
  image: string;
  caption: string;
  postId: number;
  onClose: () => void;
}

interface ChatProps {
  commentText: boolean;
}
const MyDetailPage: React.FC<ModalProps> = ({
  postId,
  image,
  caption,
  onClose,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    // 포스트 정보 및 좋아요 상태를 가져오는 함수 호출
    fetchPostInfo();
  }, []);

  const fetchPostInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/post/${postId}`
      );
      const postData = response.data;
      setIsLiked(postData.isLiked);
      setLikeCount(postData.likeCount);
    } catch (error) {
      console.error("Error fetching post info:", error);
    }
  };

  const toggleLike = async () => {
    try {
      if (isLiked) {
        await axios.post(`http://localhost:8080/api/post/${postId}/unlike`);
        setIsLiked(false);
        setLikeCount(likeCount - 1);
      } else {
        await axios.post(`http://localhost:8080/api/post/${postId}/like`);
        setIsLiked(true);
        setLikeCount(likeCount + 1);
      }
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <ImageContainer>
          <ContentImage src={image} alt="" />
        </ImageContainer>
        {/* <Caption>{caption}</Caption>
        <CloseButton onClick={onClose}>닫기</CloseButton> */}
        <Wrapper>
          <ProfileWrapper>
            <ProfileBox>
              <Image src={whiteProfile} alt={""} width={32} height={32} />
              <ProfileName>PPAC__MAN</ProfileName>
            </ProfileBox>
            <OptionBox>
              <svg
                aria-label="옵션 더 보기"
                className="_ab6-"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <circle cx="12" cy="12" r="1.5"></circle>
                <circle cx="6" cy="12" r="1.5"></circle>
                <circle cx="18" cy="12" r="1.5"></circle>
              </svg>
            </OptionBox>
          </ProfileWrapper>
          <CommentWrapper>
            <CaptionWrapper>
              <Image src={whiteProfile} alt={""} width={32} height={32} />
              <CaptionBox>
                <Caption>
                  <strong>ppac__man</strong>{" "}
                  <CaptionSpan>{caption}</CaptionSpan>
                </Caption>
                <Date>59주 전</Date>
              </CaptionBox>
            </CaptionWrapper>
            <CommentLine>
              <Image src={whiteProfile} alt={""} width={32} height={32} />
              <CommentBox>
                <Comment>
                  <strong>ppac__man</strong>{" "}
                  <CommentSpan>댓글을 표시할겁니다</CommentSpan>
                </Comment>
                <Date>
                  59주 전 <ReComment>답글달기</ReComment>
                </Date>
              </CommentBox>
            </CommentLine>
            <CommentLine>
              <Image src={whiteProfile} alt={""} width={32} height={32} />
              <CommentBox>
                <Comment>
                  <strong>ppac__man</strong>{" "}
                  <CommentSpan>댓글을 표시할겁니다</CommentSpan>
                </Comment>
                <Date>
                  59주 전 <ReComment>답글달기</ReComment>
                </Date>
              </CommentBox>
            </CommentLine>{" "}
            <CommentLine>
              <Image src={whiteProfile} alt={""} width={32} height={32} />
              <CommentBox>
                <Comment>
                  <strong>ppac__man</strong>{" "}
                  <CommentSpan>댓글을 표시할겁니다</CommentSpan>
                </Comment>
                <Date>
                  59주 전 <ReComment>답글달기</ReComment>
                </Date>
              </CommentBox>
            </CommentLine>
          </CommentWrapper>
          <AdditionalWrapper>
            <SvgLine>
              <SvgBox onClick={toggleLike}>
                <svg
                  aria-label="좋아요"
                  className="x1lliihq x1n2onr6"
                  color={isLiked ? "rgb(255, 0, 0)" : "rgb(38, 38, 38)"}
                  fill={isLiked ? "rgb(255, 0, 0)" : "rgb(38, 38, 38)"}
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>좋아요</title>
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>
              </SvgBox>
              <SvgBox>
                <svg
                  aria-label="댓글 달기"
                  className="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>댓글 달기</title>
                  <path
                    d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </SvgBox>
              <SvgBox>
                <svg
                  aria-label="게시물 공유"
                  className="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>게시물 공유</title>
                  <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                    x1="22"
                    x2="9.218"
                    y1="3"
                    y2="10.083"
                  ></line>
                  <polygon
                    fill="none"
                    points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </SvgBox>
              <SaveSvgBox>
                <svg
                  aria-label="저장"
                  className="x1lliihq x1n2onr6"
                  color="rgb(0, 0, 0)"
                  fill="rgb(0, 0, 0)"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>저장</title>
                  <polygon
                    fill="none"
                    points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></polygon>
                </svg>
              </SaveSvgBox>
            </SvgLine>
            <LikeLine>filos님 외 {likeCount}명이 좋아합니다</LikeLine>
            <PostDateLine>2022년 7월 30일</PostDateLine>
          </AdditionalWrapper>
          <WriteCommentLine>
            <IconSvgBox>
              <svg
                aria-label="이모티콘"
                className="x1lliihq x1n2onr6"
                color="rgb(0, 0, 0)"
                fill="rgb(0, 0, 0)"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>이모티콘</title>
                <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
              </svg>
            </IconSvgBox>
            <CommentInput
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="댓글 달기..."
            />
            <CommentBtnBox
              disabled={!commentText}
              style={{
                color: commentText ? "rgb(0, 149, 246)" : "rgb(217, 237, 255)",
              }}
              commentText={commentText.length === 0}
            >
              게시
            </CommentBtnBox>
          </WriteCommentLine>
        </Wrapper>
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
  z-index: 2;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 4px;
  display: flex;
`;

const ImageContainer = styled.div`
  width: 500px;
  height: 600px;
  margin: 0 auto;
`;

const ContentImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 500px;
  height: 690px;
  border-left: 1px solid rgb(219, 219, 219);
`;

const CloseButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(219, 219, 219);
  width: 500px;
  height: 60px;
`;
const ProfileBox = styled.div`
  width: 431px;
  height: 32px;
  padding: 14px 4px 14px 16px;
  display: flex;
  align-items: center;
`;
const ProfileName = styled.div`
  width: 385px;
  height: 26px;
  margin-left: 14px;
  font-weight: 600;
  font-size: 14px;
  align-items: center;
  display: flex;
`;
const OptionBox = styled.div`
  height: 40px;
  width: 40px;
  padding-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CommentWrapper = styled.div`
  width: 467px;
  height: 436px;
  padding: 16px;
  border-bottom: 1px solid rgb(219, 219, 219);
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0);
  }
`;
const CaptionWrapper = styled.div`
  width: 451px;
  height: 41px;
  display: flex;
  padding: 5px 16px 16px 0px;
`;
const CaptionBox = styled.div`
  width: 226px;
  height: 41px;
  margin-left: 18px;
  align-items: flex-start;
`;
const Caption = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const CaptionSpan = styled.div`
  margin-left: 10px;
`;
const Date = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  padding-top: 5px;
  color: rgb(123, 123, 123);
`;
const CommentLine = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;
const Comment = styled.div`
  height: 18px;
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const CommentBox = styled.div`
  width: 226px;
  height: 41px;
  margin-left: 18px;
  align-items: flex-start;
`;
const CommentSpan = styled.div`
  margin-left: 10px;
`;

const ReComment = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 12px;
  font-weight: 600;
  padding-top: 5px;
  color: rgb(123, 123, 123);
  margin-left: 14px;
`;

const AdditionalWrapper = styled.div`
  height: 110px;
  width: 500px;
  border-bottom: 1px solid rgb(219, 219, 219);
  justify-content: center;
`;

const SvgLine = styled.div`
  width: 467px;
  height: 40px;
  padding: 6px 16px 8px 10px;
  display: flex;
  align-items: center;
`;

const SvgBox = styled.div`
  height: 24px;
  width: 24px;
  padding: 8px;
  &:hover {
    cursor: pointer;
  }
`;
const SaveSvgBox = styled.div`
  height: 24px;
  width: 24px;
  padding: 8px;
  margin-left: 325px;
  &:hover {
    cursor: pointer;
  }
`;
const LikeLine = styled.div`
  width: 467px;
  height: 23px;
  padding: 0px 16px 0px 16px;
  margin-bottom: 4px;
`;
const PostDateLine = styled.div`
  width: 483px;
  height: 7px;
  font-size: 10px;
  color: rgb(123, 123, 123);
  padding-left: 16px;
`;

const WriteCommentLine = styled.div`
  width: 483px;
  height: 37px;
  padding: 6px 16px 6px 0px;
  display: flex;
  align-items: center;
`;
const IconSvgBox = styled.div`
  width: 24px;
  height: 24px;
  padding: 8px 16px 8px 16px;
`;
const CommentInput = styled.textarea`
  width: 391px;
  height: 18px;
  border: none;
  outline: none;
  font-size: 16px;
  overflow: hidden;
  resize: none;
`;
const CommentBtnBox = styled.button<ChatProps>`
  width: 50px;
  height: 18px;
  margin-left: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: none;
  color: rgb(0, 149, 246);
  font-weight: 600;
  cursor: ${(props) => (props.commentText ? "default" : "pointer")};
`;
