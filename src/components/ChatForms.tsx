import React, { ReactElement, useState } from "react";
import styled from "styled-components";

interface Props {
  sendMessage: (message: string) => void;
}

const ChatForms: React.FC<Props> = (props: Props): ReactElement => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="chat-input"
        placeholder="Type a message..."
      />
      <button onClick={() => props.sendMessage(message)}>Click Me</button>
    </div>
  );
};

export default ChatForms;
