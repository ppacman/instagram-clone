import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import mobile from '../../../../public/img/mobile.png';
import instagram from "../../../../public/img/instagram.jpg"
import mobile1 from '../../../../public/img/mobile1.png';
const MobileImage = () => {
    return (
        <div>
           
          <Wrapper>
          <Image src={mobile} alt={""} width={380.312} height={581.151} />
          <ImgWrapper>
          <Image src={instagram} alt={""} width={250} height={538.84} border-radius={20} />
          </ImgWrapper>
          </Wrapper>
          
        </div>
    );
};

export default MobileImage;


const Wrapper = styled.div`
width: 380.312px;
height: 581.151px;
background-color: aliceblue;
margin-right: 32px;
margin-bottom: 12px;
justify-content: flex-start;
`

const ImgWrapper = styled.div`
    position: fixed;
    left : 360px;
    top : 60px;
    width : 250px;
    height: 538.84px;
    border-radius: 20px;
    overflow: hidden;
`

