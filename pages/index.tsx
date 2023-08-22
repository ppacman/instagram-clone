import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";

interface UserPost {
  image: string;
  caption: string;
  postId: number;
}
const MainPage: React.FC<UserPost> = ({ postId, image, caption }) => {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [content, setCommentText] = useState("");

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/post/all");
        if (response.ok) {
          const data = await response.json();
          setUserPosts(data);
        } else {
          console.error("데이터 가져오기 실패");
        }
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };
    fetchPostInfo();
    fetchUserPosts();
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

  const sendComment = async () => {
    try {
      if (content.trim() === "") {
        return;
      }

      await axios.post(`http://localhost:8080/api/post/${postId}/comment`, {
        postId,
        content,
      });
      setCommentText("");
    } catch (error) {
      console.error("Error sending comment:", error);
    }
  };

  return (
    <Wrapper>
      {userPosts.map((post, index) => (
        <ContentWrapper key={post.postId}>
          <InfoLine>
            <InfoImage></InfoImage>
            <InfoNameBox>
              <InfoId>ppac__man</InfoId>
              <InfoName>김효성</InfoName>
            </InfoNameBox>
            <DetailBtn>
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
            </DetailBtn>
          </InfoLine>
          <ContentImage>
            <Image
              src={`data:image/jpeg;base64,${post.image}`}
              width={468}
              height={585}
              alt={""}
            />
          </ContentImage>
          <FuncLine>
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
          </FuncLine>
          <LikeLine>
            <LikeSpan>좋아요</LikeSpan>
            <LikeNumber>{likeCount}</LikeNumber>
          </LikeLine>
          <CaptionLine>ppac__man {post.caption}</CaptionLine>
          <CommentLine>
            <CommentArea placeholder="댓글 달기..." />
          </CommentLine>
        </ContentWrapper>
      ))}
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 1200px;
  padding-top: 22px;

  justify-content: center;
`;
const ContentWrapper = styled.div`
  margin-top: 101px;
  width: 470px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgb(219, 219, 219);
  margin-bottom: 24px;
  margin-left: 400px;
`;
const InfoLine = styled.div`
  display: flex;
  align-items: center;
  width: 470px;
  height: 34px;
  padding: 0px 0px 12px 4px;
`;
const InfoImage = styled.div`
  width: 42px;
  height: 42px;
  background-color: aliceblue;
`;
const InfoNameBox = styled.div`
  width: 390px;
  height: 34px;
`;
const InfoId = styled.div`
  width: 390px;
  height: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const InfoName = styled.div`
  width: 390px;
  height: 16px;
  display: flex;
  align-items: center;
`;
const DetailBtn = styled.div`
  width: 24px;
  height: 24px;
`;

const ContentImage = styled.div`
  width: 468px;
  height: 585px;
`;

const FuncLine = styled.div`
  width: 470px;
  height: 40px;
  margin: 4px 0px 4px 0px;
  display: flex;
  align-items: center;
`;
const SvgBox = styled.div`
  height: 24px;
  width: 24px;
  padding-right: 16px;
  &:hover {
    cursor: pointer;
  }
`;
const SaveSvgBox = styled.div`
  height: 24px;
  width: 24px;
  padding: 8px;
  margin-left: 320px;
  &:hover {
    cursor: pointer;
  }
`;

const LikeLine = styled.div`
  width: 470px;
  height: 18px;
  display: flex;
  align-items: center;
`;
const LikeSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;
const LikeNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
`;
const CaptionLine = styled.div`
  width: 470px;
  height: 18px;
  margin-top: 8px;
  display: flex;
  align-items: center;
`;
const CommentLine = styled.div`
  width: 470px;
  height: 18px;
  margin-top: 8px;
`;
const CommentArea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
`;
