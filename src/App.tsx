import React, { ReactElement } from "react";
import { SocketClient } from "@cognigy/socket-client";
import ChatFroms from "./components/ChatForms";
import ChatHistory from "./components/ChatHistory";

export default class App extends React.Component<{}, {}> {
  client: SocketClient;

  constructor(props: {}) {
    super(props);

    this.client = new SocketClient(
      "https://endpoint-demo.cognigy.ai",
      "ce5c41bdbd3cc71fbb81b0f192e46c9b1f306988cc03d9bc5a348ad96d249aba",
      {
        // if you use node, internet explorer or safari, you need to enforce websockets
        forceWebsockets: true
      }
    );
  }

  componentDidMount(): void {
    this.client.connect().then(() => {
      this.client.on("output", output => {
        console.log(output);
      });
      this.client.sendMessage("hello there");
      this.client.sendMessage("hello there");
      this.client.sendMessage("hello there", { color: "green" });
      this.client.sendMessage("", { color: "green" });
    });
  }

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
