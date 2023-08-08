import React, { useState } from "react";
import { SetNameBox } from "../styled";
import ChatComponent from "./chat";

function SetName() {
  const [userName, setUserName] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");
  const [isNameSet, setIsNameSet] = useState<boolean>(false); // 이름이 설정되었는지 여부를 관리
  const [isRoomIdSet, setIsRoomIdSet] = useState<boolean>(false); // 이름이 설정되었는지 여부를 관리

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName && roomId) {
      setIsNameSet(true); // 이름이 설정되었음을 표시
      setIsRoomIdSet(true);
    }
  };

  return (
    <>
      {!isNameSet && !isRoomIdSet ? ( // 이름이 설정되지 않았을 때
        <SetNameBox>
          <h3>방이름 & 이름을 입력하세요.</h3>
          <form onSubmit={handleSubmit}>
            <input
              placeholder="방이름"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
            />
            <input
              placeholder="이름"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button type="submit">저장</button>
          </form>
        </SetNameBox>
      ) : (
        // 이름이 설정되었을 때
        <ChatComponent userName={userName} roomId={roomId} />
      )}
    </>
  );
}

export default SetName;
