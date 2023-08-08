// import React, { useEffect } from "react";
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";

// function ChatRoom({ room }) {
//   useEffect(() => {
//     const roomName = room.name;
//     const roomId = room.roomId;
//     const username = "USER_NAME"; // 사용자 이름을 여기에 넣으세요

//     console.log(roomName + ", " + roomId + ", " + username);

//     const sockJs = new SockJS("/stomp/chat");
//     const stomp = Stomp.over(sockJs);

//     stomp.connect({}, function () {
//       console.log("STOMP Connection");

//       stomp.subscribe("/sub/chat/room/" + roomId, function (chat) {
//         const content = JSON.parse(chat.body);

//         const writer = content.writer;
//         const message = content.message;
//         let str = "";

//         if (writer === username) {
//           str = (
//             <div className="col-6">
//               <div className="alert alert-secondary">
//                 <b>{writer + " : " + message}</b>
//               </div>
//             </div>
//           );
//         } else {
//           str = (
//             <div className="col-6">
//               <div className="alert alert-warning">
//                 <b>{writer + " : " + message}</b>
//               </div>
//             </div>
//           );
//         }

//         const msgArea = document.getElementById("msgArea");
//         if (msgArea) {
//           msgArea.innerHTML += str;
//         }
//       });

//       stomp.send(
//         "/pub/chat/enter",
//         {},
//         JSON.stringify({ roomId: roomId, writer: username })
//       );
//     });

//     const buttonSend = document.getElementById("button-send");
//     if (buttonSend) {
//       buttonSend.addEventListener("click", function (e) {
//         const msg = document.getElementById("msg");

//         console.log(username + ":" + msg.value);
//         stomp.send(
//           "/pub/chat/message",
//           {},
//           JSON.stringify({
//             roomId: roomId,
//             message: msg.value,
//             writer: username,
//           })
//         );
//         msg.value = "";
//       });
//     }
//   }, [room]);

//   return (
//     <div className="container">
//       <div className="col-6">
//         <h1>{room.name}</h1>
//       </div>
//       <div>
//         <div id="msgArea" className="col"></div>
//         <div className="col-6">
//           <div className="input-group mb-3">
//             <input type="text" id="msg" className="form-control" />
//             <div className="input-group-append">
//               <button
//                 className="btn btn-outline-secondary"
//                 type="button"
//                 id="button-send"
//               >
//                 전송
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-6"></div>
//     </div>
//   );
// }

// export default ChatRoom;
