import React from 'react';
import SideBar from '../sideBar/sideBar'
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <Container>
          <Content>
           <SideBar />
            {children}
            </Content>
            </Container>
    );
};

export default Layout;



const Container = styled.div`
  display: flex;
`;


const Content = styled.div`
  margin-left: 244.8px; /* SideBar 너비만큼 왼쪽 여백 설정 */
  /* 추가적인 스타일 및 내용 컴포넌트에 대한 스타일 설정 */
`;