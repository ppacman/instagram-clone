// import React, { useState, useEffect, useRef } from "react";
// import { ChatContainer, Header, MessageInput, MessageArea } from "../styled";

// interface Message {
//   userName: string;
//   message: string;
// }
// interface ChatComponentProps {
//   userName: string;
// }

// function ChatComponent({ userName }: ChatComponentProps) {
//   const [username, setUsername] = useState<String>(userName);
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [message, setMessage] = useState<string>("");
//   const [connectedSocket, setConnectedSocket] = useState<boolean>(false);

//   const socket = useRef<WebSocket>();

//   useEffect(() => {
//     socket.current = new WebSocket("ws://localhost:8080/ws/chat");

//     socket.current.onmessage = onMessage;
//     socket.current.onopen = onOpen;
//     socket.current.onclose = onClose;

//     return () => {
//       socket.current?.close();
//     };
//   }, []);

//   function onMessage(event: MessageEvent) {
//     // 메세지 수신
//     const data = event.data;
//     const [userName, receivedMessage] = data.split(":");
//     console.log(data);

//     const newMessage: Message = {
//       userName,
//       message: receivedMessage,
//     };

//     setMessages((prevMessages) => [...prevMessages, newMessage]);
//   }

//   function onOpen() {
//     const str = `${username}: 님이 입장하셨습니다.`;
//     setConnectedSocket(true);
//     socket.current?.send(str);
//   }

//   function onClose() {
//     const str = `${username}: 님이 방을 나가셨습니다.`;
//     setConnectedSocket(false);

//     socket.current?.send(str);
//   }

//   function sendMessage() {
//     // 메세지 전송
//     if (connectedSocket) {
//       const messageToSend = `${username}: ${message}`;

//       socket.current?.send(messageToSend);
//       setMessage("");
//     }
//   }

//   return (
//     <ChatContainer>
//       <Header>
//         <b>채팅방</b>
//       </Header>
//       <MessageArea>
//         {messages.map((msg, index) => (
//           <div
//             className={`message ${
//               msg.userName === username ? "own-message" : "other-message"
//             }`}
//             key={index}
//           >
//             <b>
//               {msg.userName} : {msg.message}
//             </b>
//           </div>
//         ))}
//       </MessageArea>
//       <MessageInput>
//         <input
//           type="text"
//           id="msg"
//           placeholder="메시지를 입력하세요..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="button" onClick={sendMessage}>
//           전송
//         </button>
//       </MessageInput>
//     </ChatContainer>
//   );
// }

// export default ChatComponent;

import React, { useState, useEffect } from "react";
import { ChatContainer, Header, MessageInput, MessageArea } from "../styled";
import SockJS from "sockjs-client";

interface Message {
  type: string;
  roomId: string;
  userName: string;
  message: string;
}

interface ChatComponentProps {
  userName: string;
  roomId: string;
}

function ChatComponent({ userName, roomId }: ChatComponentProps) {
  const [username, setUsername] = useState(userName);
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [connectedSocket, setConnectedSocket] = useState(false);
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socketInstance = new SockJS("http://localhost:8080/ws/chat");
    console.log("Socket:", socketInstance);
    setSocket(socketInstance);

    socketInstance.onopen = () => {
      setConnectedSocket(true);
      socketInstance.send(JSON.stringify({ type: "join", roomId, userName }));
    };

    socketInstance.onmessage = (event: MessageEvent) => {
      const receivedMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      console.log(receivedMessage);
    };

    socketInstance.onclose = () => {
      setConnectedSocket(false);
    };

    return () => {
      if (socketInstance) {
        socketInstance.close();
      }
    };
  }, [roomId]);

  function sendMessage() {
    if (socket && socket.readyState === SockJS.OPEN) {
      // const messageToSend = `${username}: ${message}`;
      socket.send(
        JSON.stringify({ type: "message", roomId, userName, message })
      );
      setMessage("");
    }
  }

  return (
    <ChatContainer>
      <Header>
        <b>채팅방</b>
      </Header>
      {connectedSocket ? (
        <MessageArea>
          {messages.map((msg, index) => (
            <div
              className={`message ${
                msg.userName === username ? "own-message" : "other-message"
              }`}
              key={index}
            >
              <b>
                {msg.type == "join"
                  ? msg.userName + "님이 입장하셨습니다."
                  : msg.userName + ":" + msg.message}
              </b>
            </div>
          ))}
        </MessageArea>
      ) : (
        <div>채팅방에 입장 중...</div>
      )}
      {connectedSocket && (
        <MessageInput>
          <input
            type="text"
            id="msg"
            placeholder="메시지를 입력하세요..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="button" onClick={sendMessage}>
            전송
          </button>
        </MessageInput>
      )}
    </ChatContainer>
  );
}

export default ChatComponent;
