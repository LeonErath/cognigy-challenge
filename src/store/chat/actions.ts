import {
  Message,
  ADD_MESSAGE,
  RECIEVE_MESSAGE,
  ChatActionTypes
} from "./types";

export function addMessage(newMessage: Message): ChatActionTypes {
  return {
    type: ADD_MESSAGE,
    payload: newMessage
  };
}

export function recieveMessage(newMessage: Message): ChatActionTypes {
  return {
    type: RECIEVE_MESSAGE,
    payload: newMessage
  };
}
