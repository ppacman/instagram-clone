import React from "react";
import styled from "styled-components";
import Image from "next/image";
import whiteProfile from "../../../../public/img/whiteProfile.png";
import option from "../../../../public/img/myPage/option.png";

const Profile = () => {
  return (
    <Container>
      <ImgDiv>
        <Image src={whiteProfile} alt={""} width={150} height={150} />
      </ImgDiv>
      <InfoList>
        <FirstLine>
          <Name>ppac__man</Name>
          <EditBtn>프로필 편집</EditBtn>
          <SettingBtn>
            <Image src={option} alt={""} width={22} height={22} />
          </SettingBtn>
        </FirstLine>
        <SecondLine>
          <ListSpan>
            게시물 <NumSpan>6</NumSpan>
          </ListSpan>
          <ListSpan>
            팔로워 <NumSpan>500M</NumSpan>
          </ListSpan>
          <ListSpan>
            팔로우 <NumSpan>1</NumSpan>
          </ListSpan>
        </SecondLine>
        <ThridLine>
          <NameDiv>김효성</NameDiv>

          <IntroDiv>뭐여</IntroDiv>
        </ThridLine>
      </InfoList>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  display: flex;
  margin-bottom: 44px;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 292px;
  height: 150px;
  margin-right: 30px;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 643px;
`;
const FirstLine = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 20px;
`;
const Name = styled.p`
  display: inline;
  font-size: 20px;
`;
const EditBtn = styled.button`
  margin-left: 20px;
  background-color: 239, 239, 239;
  border: none;
  border-radius: 8px;
  width: 105.85px;
  height: 32px;
  font-weight: 600;
  font-size: 0.875rem;
  &:hover {
    cursor: pointer;
    background-color: rgb(219, 219, 219);
  }
`;
const SettingBtn = styled.button`
  border: none;
  background-color: #fafafa;
  padding: 8px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
const SecondLine = styled.div`
  display: flex;
  height: 18px;
  margin-bottom: 20px;
`;
const ListSpan = styled.div`
  font-size: 16px;
  margin-right: 40px;
`;
const NumSpan = styled.span`
  font-weight: 600;
  font-size: 16px;
`;
const ThridLine = styled.div`
  
`;
const NameDiv = styled.div`
  width: 42px;
  height: 18px;
  font-size: 14px;
  font-weight: 600;
`;
const IntroDiv = styled.div`
  font-weight: 400;
  font-size: 14px;
`;
