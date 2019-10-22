import React, { ReactElement } from "react";
import { SocketClient } from "@cognigy/socket-client";
import ChatFroms from "./components/ChatForms";
import ChatHistory from "./components/ChatHistory";

const Token = process.env.REACT_APP_TOKEN || "";
console.log(process.env);

export default class App extends React.Component<{}, {}> {
  client: SocketClient;

  constructor(props: {}) {
    super(props);

    this.client = new SocketClient("https://endpoint-demo.cognigy.ai", Token, {
      forceWebsockets: true
    });
  }

  componentDidMount(): void {
    this.client.connect().then(() => {
      this.client.on("output", output => {
        this.recieveMessage(output.text);
      });
    });
  }

  recieveMessage = (message: string) => {
    console.log(message);
  };

  sendMessage = (message: string) => {
    this.client.sendMessage(message);
  };

  render(): React.ReactNode {
    return (
      <div>
        Hello World
        <ChatHistory></ChatHistory>
        <ChatFroms sendMessage={this.sendMessage}></ChatFroms>
      </div>
    );
  }
}
