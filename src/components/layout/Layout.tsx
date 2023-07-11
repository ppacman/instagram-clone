import React from 'react';
import SideBar from '../sideBar/sideBar'
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <Container>
           <SideBar />
            {children}
            </Container>
    );
};

export default Layout;



const Container = styled.div`
  display: flex;
`;

