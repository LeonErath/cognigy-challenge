// Describing the shape of the chat's slice of state
export interface Message {
  text?: string;
  source: "user" | "bot";
  data?: any;
}

export interface ChatState {
  messages: Message[];
}

export const ADD_MESSAGE = "ADD_MESSAGE";
export const RECIEVE_MESSAGE = "RECIEVE_MESSAGE";

interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: Message;
}

interface RecieveMessageAction {
  type: typeof RECIEVE_MESSAGE;
  payload: Message;
}

export type ChatActionTypes = AddMessageAction | RecieveMessageAction;
