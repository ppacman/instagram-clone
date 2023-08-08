import React from "react";

import SetName from "../chat/component/createRoom";
// import RoomList from "../chat/component/roomlist";
import SideBar from "../sideBar/sideBar";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <SetName />
      {/* <RoomList list={[]} roomName={"hi"} /> */}
    </div>
  );
};

export default Layout;
