import React from "react";
import { SocketClient } from "@cognigy/socket-client";
import { connect } from "react-redux";
import { AppState } from "./store";
import { addMessage } from "./store/chat/actions";
import { ChatState } from "./store/chat/types";
import ChatFroms from "./components/ChatForms";
import ChatHistory from "./components/ChatHistory";

const Token = process.env.REACT_APP_TOKEN || "";

interface AppProps {
  addMessage: typeof addMessage;
  chat: ChatState;
}

class App extends React.Component<AppProps> {
  client: SocketClient;

  constructor(props: AppProps) {
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
    this.props.addMessage({
      text: message,
      source: "bot"
    });
  };

  sendMessage = (message: string) => {
    this.client.sendMessage(message);
    this.props.addMessage({
      text: message,
      source: "user"
    });
  };

  render(): React.ReactNode {
    const chat = this.props.chat;
    console.log(chat);

    return (
      <div>
        Hello World
        <ChatHistory chat={chat}></ChatHistory>
        <ChatFroms sendMessage={this.sendMessage}></ChatFroms>
      </div>
    );
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapStateToProps = (state: AppState) => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { addMessage }
)(App);
