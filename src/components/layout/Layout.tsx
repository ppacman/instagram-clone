import React from 'react';
import SideBar from '../sideBar/sideBar'

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
    return (
        <div>
            <SideBar />
        </div>
    );
};

export default Layout;


