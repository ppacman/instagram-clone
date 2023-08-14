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


