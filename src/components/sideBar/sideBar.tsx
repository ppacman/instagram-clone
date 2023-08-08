import React, { useState, useEffect, useRef, forwardRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import instagramTypo from "../../../public/img/instagramTypo.png";
import whiteHome from "../../../public/img/whiteHome.svg";
import blackHome from "../../../public/img/blackHome.svg";
import blackSearch from "../../../public/img/blackSearch.png";
import whiteSearch from "../../../public/img/whiteSearch.svg";
import blackCompass from "../../../public/img/blackCompass.png";
import whiteCompass from "../../../public/img/whiteCompass.png";
import blackReels from "../../../public/img/blackReels.svg";
import whiteReels from "../../../public/img/whiteReels.svg";
import whiteDm from "../../../public/img/whiteDm.png";
import blackDm from "../../../public/img/blackDm.png";
import whiteHeart from "../../../public/img/whiteHeart.png";
import blackHeart from "../../../public/img/blackHeart.png";
import whitePlus from "../../../public/img/whitePlus.png";
import blackPlus from "../../../public/img/blackPlus.png";
import menu from "../../../public/img/menu.svg";
import whiteProfile from "../../../public/img/whiteProfile.png";
import blackProfile from "../../../public/img/blackProfile.png";
import Modal from "./components/Modal";
import Router from "next/router";
import { pathName } from "@/config/pathName";
import PostForm from "../postForm/PostForm";
const SideBar = () => {
  const [buttonStates, setButtonStates] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [modalState, setModalState] = useState(false);
  const [postState, setPostState] = useState(false);

  const handleClick = (index: number) => {
    const newButtonStates = [...buttonStates];
    newButtonStates.fill(false); // 모든 버튼 상태를 false로 초기화
    newButtonStates[index] = true; // 클릭한 버튼의 상태를 true로 설정
    setButtonStates(newButtonStates);
  };
  const modalClick = () => {
    setModalState(!modalState);
  };
  const postClick = () => {
    setPostState(!postState);
    handleClick(6);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Escape") {
      // ESC 키를 누르면 모달 닫기
      setModalState(false);
      setPostState(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown); // keyDown 이벤트 등록

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // 컴포넌트 언마운트 시 이벤트 제거
    };
  }, []);



  const profileClick = () => {
    handleClick(7); // 프로필 메뉴 클릭 상태로 설정
    Router.push(pathName.MYPAGE); // 프로필 페이지로 이동
  };

  const mainClick = () => {
    handleClick(0);
    Router.push(pathName.MAIN);
  };

  return (
    <>
      {postState && <PostForm />}
      {modalState && <Modal />}

      <SideBox>
        <LogoBox>
          <Typo>
            <Image src={instagramTypo} alt={""} width={103} height={29} />
          </Typo>
        </LogoBox>
        <MenuWrapper>
          <MenuBox>
            <Menu onClick={mainClick}>
              {buttonStates[0] ? (
                <Image src={blackHome} alt={""} width={27} height={27} />
              ) : (
                <Image src={whiteHome} alt={""} width={27} height={27} />
              )}
              <MenuTypo active={buttonStates[0]}>홈 </MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={() => handleClick(1)}>
              {buttonStates[1] ? (
                <Image src={blackSearch} alt={""} width={27} height={27} />
              ) : (
                <Image src={whiteSearch} alt={""} width={27} height={27} />
              )}
              <MenuTypo active={buttonStates[1]}>검색</MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={() => handleClick(2)}>
              {buttonStates[2] ? (
                <Image src={blackCompass} alt={""} width={27} height={27} />
              ) : (
                <Image src={whiteCompass} alt={""} width={27} height={27} />
              )}
              <MenuTypo active={buttonStates[2]}>탐색 탭</MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={() => handleClick(3)}>
              {buttonStates[3] ? (
                <Image src={blackReels} alt={""} width={27} height={27} />
              ) : (
                <Image src={whiteReels} alt={""} width={27} height={27} />
              )}

              <MenuTypo active={buttonStates[3]}>릴스</MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={() => handleClick(4)}>
              {buttonStates[4] ? (
                <Image src={blackDm} alt={""} width={25} height={25} />
              ) : (
                <Image src={whiteDm} alt={""} width={25} height={25} />
              )}
              <MenuTypo active={buttonStates[4]}>메시지</MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={() => handleClick(5)}>
              {buttonStates[5] ? (
                <Image src={blackHeart} alt={""} width={27} height={27} />
              ) : (
                <Image src={whiteHeart} alt={""} width={27} height={27} />
              )}
              <MenuTypo active={buttonStates[5]}>알림</MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={() => postClick()}>
              {buttonStates[6] ? (
                <Image src={blackPlus} alt={""} width={27} height={27} />
              ) : (
                <Image src={whitePlus} alt={""} width={27} height={27} />
              )}
              <MenuTypo active={buttonStates[6]}>만들기</MenuTypo>
            </Menu>
          </MenuBox>
          <MenuBox>
            <Menu onClick={profileClick}>
              {buttonStates[7] ? (
                <Image src={blackProfile} alt={""} width={27} height={27} />
              ) : (
                <Image src={whiteProfile} alt={""} width={27} height={27} />
              )}
              <MenuTypo active={buttonStates[7]}>프로필</MenuTypo>
            </Menu>
          </MenuBox>
        </MenuWrapper>
        <Menu onClick={modalClick}>
          <Image src={menu} alt={""} width={27} height={27} />
          <MenuTypo active={modalState}>더 보기</MenuTypo>
        </Menu>
      </SideBox>
    </>
  );
};

export default SideBar;

const SideBox = styled.div`
  width: 220px;
  height: 100vh;
  transform: translateX(0px);
  display: block;
  z-index: 1;
  border-right: 1px solid rgb(219, 219, 219);
  padding: 8px 12px 20px 12px;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
`;

const LogoBox = styled.div`
  width: 220px;
  height: 92px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
`;
const Typo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 220px;
  height: 569.6px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
`;

const MenuBox = styled.div`
  position: relative;
  width: 220px;
  height: 56px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.div`
  width: 196px;
  height: 27px;
  position: relative;
  padding: 12px;
  display: flexbox;
  cursor: pointer;
  border-radius: 8px;
  margin: 4px 0px 4px 0px;
  &:hover {
    background-color: rgb(242, 242, 242);
  }

  > img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;

const MenuTypo = styled.div<{ active: boolean }>`
  height: 27px;
  padding-left: 16px;
  display: flex;
  position: relative;
  font-size: 16px;
  font-weight: 400;
  align-items: center;
  font-weight: ${(props) => (props.active ? "bold" : "400")};
`;
