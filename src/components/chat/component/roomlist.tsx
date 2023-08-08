// import React, { useState, useEffect, FormEvent } from "react";
// import { Link } from "react-router-dom"; // 사용자에게 적절한 리액트 라우터 링크로 변경

// interface room {
//   roomId: string;
//   name: String;
// }

// interface roomComponentsProps {
//   list: Array<room>;
//   roomName: string;
// }

// function RoomList({ list, roomName }: roomComponentsProps) {
//   const [newRoomName, setNewRoomName] = useState("");

//   useEffect(() => {
//     if (roomName !== null) {
//       alert(`${roomName} 방이 개설되었습니다.`);
//     }
//   }, [roomName]);

//   const handleCreate = (e: FormEvent) => {
//     e.preventDefault();

//     if (newRoomName === "") {
//       alert("Please write the name.");
//     } else {
//       // Create room logic
//       // You can use your API calls or state management to create a new room
//     }
//   };

//   return (
//     <div className="container">
//       <div>
//         <ul>
//           {list.map((room) => (
//             <li key={room.roomId}>
//               <Link to={`/chat/room?roomId=${room.roomId}`}>{room.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <form onSubmit={handleCreate} action="/chat/room" method="post">
//         <input
//           type="text"
//           name="name"
//           className="form-control"
//           value={newRoomName}
//           onChange={(e) => setNewRoomName(e.target.value)}
//         />
//         <button type="submit" className="btn btn-secondary btn-create">
//           개설하기
//         </button>
//       </form>
//     </div>
//   );
// }

// export default RoomList;
