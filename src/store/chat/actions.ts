import { Message, ADD_MESSAGE, ChatActionTypes } from "./types";

export function addMessage(newMessage: Message): ChatActionTypes {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  };
}
