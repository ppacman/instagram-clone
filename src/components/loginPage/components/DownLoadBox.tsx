import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import googleplay from '../../../../public/img/googleplay.png'
import microsoft from '../../../../public/img/microsoft.png'

const DownLoadBox = () => {
    return (
        <Wrapper>
            <Typo> 앱을 다룬로드하세요.</Typo>
            <ImageWrapper>
                <Link href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DB4443A67-97B7-4120-8C98-825AB7146871%26utm_content%3Dlo%26utm_medium%3Dbadge'>
                <Image src={googleplay} alt ={''} width={134.275} height={40} />
                </Link>
                <Gap />
                <Link href="https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT?hl=ko-kr&gl=kr&rtc=1">
                <Image src={microsoft} alt ={''} width={110.762} height={40} />
                </Link>
            </ImageWrapper>

        </Wrapper>
    );
};

export default DownLoadBox;


const Wrapper = styled.div`
    display: flex;
    width : 350px;
    height : 94.6px;
    flex-direction: column;
`
const Typo = styled.div`
    font-size: 14px;
    line-height: 18px;
    margin: 10px 20px 10px 20px;
    padding: 0;
    text-align: center;
    vertical-align: baseline;
`
const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 5px 0 10px 0;
`
const Gap = styled.div`
  width: 10px;
  height: 1px;
`;

const Link = styled.a`
`