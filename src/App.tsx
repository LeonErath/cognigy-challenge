import React from "react";
import styled from "styled-components";
import { SocketClient } from "@cognigy/socket-client";
import { connect } from "react-redux";
import { AppState } from "./store";
import { addMessage } from "./store/chat/actions";
import { ChatState } from "./store/chat/types";
import NavBar from "./components/NavBar";
import ChatFroms from "./components/ChatForms";
import ChatHistory from "./components/ChatHistory";

const Container = styled.div`
  /* Height and width fallback for older browsers. */
  height: 100%;
  width: 100%;
  width: 100vw;
  height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const TOKEN = process.env.REACT_APP_TOKEN || "";
const ENDPOINT = process.env.REACT_APP_ENDPOINT || "";

interface AppProps {
  addMessage: typeof addMessage;
  chat: ChatState;
}

class App extends React.Component<AppProps> {
  client: SocketClient;

  constructor(props: AppProps) {
    super(props);

    this.client = new SocketClient(ENDPOINT, TOKEN, {
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
      <Container>
        <NavBar></NavBar>
        <ChatHistory chat={chat}></ChatHistory>
        <ChatFroms sendMessage={this.sendMessage}></ChatFroms>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState): AppState => ({
  chat: state.chat
});

export default connect(
  mapStateToProps,
  { addMessage }
)(App);
