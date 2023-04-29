import React from 'react';
import SideBar from '../sideBar/SideBar'

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


