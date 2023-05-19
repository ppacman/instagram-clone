import React from 'react';
import styled from 'styled-components';
import LoginBox from './components/LoginBox';
import SignupBox from './components/SignupBox';
const LoginPage = () => {
    return (
        <Wrapper>
       <LoginBox />
       <SignupBox />
       </Wrapper>

      
    );
};

export default LoginPage;


const Wrapper = styled.div`
   
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin-top: 12px;
    max-width: 350px
`