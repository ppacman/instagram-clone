import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import mobile from '../../../../public/img/mobile.png';
import instagram from "../../../../public/img/instagram.jpg"
const MobileImage = () => {
    return (
        <div>
           
          <Wrapper>
          <Image src={mobile} alt={""} width={380.312} height={581.151} />
        
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
  
    background-color: black;
    width : 250px;
    height: 538.84px;
`

