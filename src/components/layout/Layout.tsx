import React from 'react';
import { useRouter } from 'next/router';
import SideBar from '../sideBar/sideBar'
import styled, { DefaultTheme, StyledComponent } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

interface ContentProps {
  hideSideBar: boolean;
}

const Layout = ({ children }: Props) => {
  const router = useRouter();
  const hideSideBarPages = ['/login', '/signUp'];
  const hideSideBar = hideSideBarPages.includes(router.pathname);

  return (
    <Container>
      {!hideSideBar && <SideBar />}
      <Content hideSideBar={hideSideBar}>
        {children}
      </Content>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  display: flex;
`;

const Content = styled.div<ContentProps>` 

  margin-left: 244.8px;
`;
