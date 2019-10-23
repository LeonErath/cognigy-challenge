import React, { ReactElement } from "react";
import styled from "styled-components";
import { ChatState } from "../store/chat/types";

const Chat = styled.div`
  max-height: 90%;
  overflow-y: scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: rgb(246, 248, 250);

  ::-webkit-scrollbar-track {
    display: none;
  }
`;

const Empty = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(246, 248, 250);

  > div {
    text-align: center;
    color: rgb(132, 132, 132);
    margin-top: 16px;
    font-weight: 300;
    font-size: 20px;
  }
`;

interface MessageProps {
  source: "bot" | "user";
}

const ChatBubble = styled.div<MessageProps>`
  align-self: ${props => (props.source === "bot" ? "flex-start" : "flex-end")};
  background: ${props => (props.source === "bot" ? "white" : "#3f51b5")};
  border-radius: 8px;
  display: table;
  color: ${props => (props.source === "bot" ? "rgb(34, 34, 34)" : "white")};
  line-height: 1.2;
  margin: 8px;
  padding: 8px;
  max-width: 300px;
`;

interface Props {
  chat: ChatState;
}

const ChatHistory: React.FC<Props> = (props: Props): ReactElement => {
  const { messages } = props.chat;
  if (messages.length === 0) {
    return (
      <Empty>
        <img src="./empty.svg" alt="Empty" width="200"></img>
        <div>Please write a message to start a conversation.</div>
      </Empty>
    );
  }
  const chat = (
    <Chat>
      {messages.map((message, i) => (
        <ChatBubble key={i} source={message.source}>
          {message.text}
        </ChatBubble>
      ))}
    </Chat>
  );
  return chat;
};

export default ChatHistory;
