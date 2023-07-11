import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SignupBox from './SignupBox';
import DownLoadBox from './DownLoadBox';
const LoginBox = () => {
    return (
        <Wrapper>
       <LoginForm />
       <SignupBox />
       <DownLoadBox />
       </Wrapper>

      
    );
};

export default LoginBox;


const Wrapper = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 12px;
    max-width: 350px


`