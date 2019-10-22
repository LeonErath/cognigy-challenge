import React, { ReactElement } from "react";
import styled from "styled-components";
import { ChatState } from "../store/chat/types";

interface Props {
  chat: ChatState;
}

const ChatHistory: React.FC<Props> = (props: Props): ReactElement => {
  const { messages } = props.chat;
  const chat = (
    <div>
      {messages.map((message, i) => (
        <div key={i}>{message.text}</div>
      ))}
    </div>
  );
  return <div>{chat}</div>;
};

export default ChatHistory;
