import styled from "styled-components";

export const SetNameBox = styled.div``;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const Header = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const MessageArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  .message {
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    margin: 5px 0;
    max-width: 70%;
  }

  .own-message {
    background-color: #e6e6e6;
    align-self: flex-end;
    text-align: right;
  }

  .other-message {
    background-color: #ffc107;
    align-self: flex-start;
    text-align: left;
  }
`;

export const MessageInput = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;

  input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
  }

  button {
    padding: 10px 15px;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;
