import React from 'react';
import styled from 'styled-components';
import LoginBox from './components/LoginBox';
import MobileImage from './components/MobileImage';
const LoginPage = () => {
    return (
        <Wrapper>
            <MobileImage />
            <LoginBox />
       </Wrapper>

      
    );
};

export default LoginPage;


const Wrapper = styled.div`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 32px;
`