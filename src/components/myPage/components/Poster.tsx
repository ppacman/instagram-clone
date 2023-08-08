import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "./PostItem";

interface UserPost {
  image: string;
  content: string;
}
const Poster = () => {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  useEffect(() => {
    // 백엔드로부터 유저의 게시물 데이터를 가져오는 비동기 함수 호출
    const fetchUserPosts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/post/all"); // 실제 백엔드 API 주소로 대체
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUserPosts(data); // 받아온 데이터로 유저의 게시물 데이터 업데이트
        } else {
          console.error("데이터 가져오기 실패");
        }
      } catch (error) {
        console.error("오류 발생:", error);
      }
    };

    fetchUserPosts();
  }, []);

  return (
   
    <Container>
      <PostItemList>
        {userPosts.map((post, index) => (
          <PostItem key={index} imageBase64={post.image} caption={post.content} />
        ))}
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


