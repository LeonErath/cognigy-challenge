import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  sendMessage: (message: string) => void;
}

const ChatForms: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <div>
      Here are some forms
      <button onClick={e => props.sendMessage("Hello")}>Click Me</button>
    </div>
  );
};

export default ChatForms;
