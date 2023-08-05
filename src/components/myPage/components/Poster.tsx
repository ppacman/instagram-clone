import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PostItem from "./PostItem";


interface UserPost {
  imageSrc: string;
 
}
const Poster = () => {
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  useEffect(() => {
    // 백엔드로부터 유저의 게시물 데이터를 가져오는 비동기 함수 호출
    const fetchUserPosts = async () => {
      try {
        const response = await fetch("백엔드 API 주소"); // 실제 백엔드 API 주소로 대체
        if (response.ok) {
          const data = await response.json();
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
    // <Container>
    //   <PostItemList>
    //     <PostItem images={"/img/myPage/one.png"}  />
    //     <PostItem images={"/img/myPage/2.png"} />
    //     <PostItem images={"/img/myPage/3.png"} />
    //     <PostItem images={"/img/myPage/4.png"} />
    //     <PostItem images={"/img/myPage/5.png"} />
    //     <PostItem images={"/img/myPage/6.png"} />
        
    //   </PostItemList>
    // </Container>
        <Container>
        <PostItemList>
          {userPosts.map((post, index) => (
            <PostItem key={index} images={post.imageSrc} />
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


{/* <Container>
<PostItemList>
  {userPosts.map((post, index) => (
    <PostItem key={index} images={post.imageSrc} />
  ))}
</PostItemList>
</Container> */}