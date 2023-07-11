  import React ,{useEffect}from "react";
  import styled from "styled-components";
  const Modal = () => {




    return (
      <Wrapper>
        <MenuBox>
          <Menu>
            <MenuTypo>설정</MenuTypo>
          </Menu>
        </MenuBox>
        <MenuBox>
          <Menu>
            <MenuTypo>내 활동</MenuTypo>
          </Menu>
        </MenuBox>
        <MenuBox>
          <Menu>
            <MenuTypo>저장됨</MenuTypo>
          </Menu>
        </MenuBox>
        <MenuBox>
          <Menu>
            <MenuTypo>모드 전환</MenuTypo>
          </Menu>
        </MenuBox>
        <MenuBox>
          <Menu>
            <MenuTypo>문제 신고</MenuTypo>
          </Menu>
        </MenuBox>
        <Bar />
        <MenuBox>
          <Menu>
            <MenuTypo>계정 전환</MenuTypo>
          </Menu>
        </MenuBox>
        <ThinBar />
        <MenuBox>
          <Menu>
            <MenuTypo>로그아웃</MenuTypo>
          </Menu>
        </MenuBox>
      </Wrapper>
    );
  };

  export default Modal;

  const Wrapper = styled.div`
    width: 250px;
    height: 388.5px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    position: absolute;
    left: 10px;
    top: 265px;
    z-index: 100;
  `;
  const MenuBox = styled.div`
    position: relative;
    width: 250px;
    height: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Menu = styled.div`
    width: 218px;
    height: 18px;
    position: relative;
    padding: 16px;
    display: flexbox;
    cursor: pointer;
    border-radius: 8px;
    margin: 4px 0px 4px 0px;
    align-items: center;
    transition: background-color 0.08s ease;
    &:hover {
      background-color: rgb(242, 242, 242);
    }
  `;

  const MenuTypo = styled.div`
    height: 14px;
    padding-left: 16px;
    display: flex;
    position: relative;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
  `;

  const Bar = styled.div`
    width: 266px;
    height: 6px;
    background-color: rgb(244, 244, 244);
    margin : 8px -8px 8px -8px;
  `;
  const ThinBar = styled.div`
    width: 250px;
    height: 0.5px;
    margin: 8px -8px 8px -8px;
    background-color: rgb(244, 244, 244);
  `;
