import React from "react";
import styled from "styled-components";
import Image from "next/image";
import instagramTypo from "../../../public/img/instagramTypo.png";

const SideBar = () => {
  return (
    <>
      <SideBox>
        <LogoBox>
          <Typo>
            <Image src={instagramTypo} alt={""} width={103} height={29} />
          </Typo>
        </LogoBox>
        <MenuBox>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
          <Menu></Menu>
        </MenuBox>
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
`;

const LogoBox = styled.div`
  width: 220px;
  height: 92px;
  position: relative;
`;
const Typo = styled.div`
  position: relative;
`;

const MenuBox = styled.div`
  display: block;
  width: 220px;
  height: 569.6;
  position: relative;
`;

const Menu = styled.div`
  position: relative;
  width: 220px;
  height: 56px;
  background-color: aliceblue;
  &:hover {
    background-color: rgb(242, 242, 242);
  }
`;
