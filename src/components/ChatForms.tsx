import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const Container = styled.div`
  border-top: 1px solid #e7e7e7;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

interface Props {
  sendMessage: (message: string) => void;
}

const ChatForms: React.FC<Props> = (props: Props): ReactElement => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  function send(): void {
    if (message.trim().length === 0) {
      setError(true);
      setErrorText("Cannot send empty message.");
    } else {
      setError(false);
      setErrorText("");
      setMessage("");
      props.sendMessage(message);
    }
  }

  function keyPress(e: React.KeyboardEvent<any>): void {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <Container>
      <FormControl error={error} style={{ margin: "8px", width: "100%" }}>
        <InputLabel htmlFor="component-error">Message</InputLabel>
        <Input
          id="component-error"
          value={message}
          onChange={e => {
            setMessage(e.target.value);
            if (message.trim().length !== 0) {
              setError(false);
              setErrorText("");
            }
          }}
          onKeyPress={keyPress}
          aria-describedby="component-error-text"
          placeholder="Type a message..."
        />
        {error && (
          <FormHelperText id="component-error-text">{errorText}</FormHelperText>
        )}
      </FormControl>

      <Button
        variant="contained"
        style={{ margin: "12px", maxHeight: "40px" }}
        color="primary"
        onClick={send}
      >
        SEND
      </Button>
    </Container>
  );
};

export default ChatForms;
