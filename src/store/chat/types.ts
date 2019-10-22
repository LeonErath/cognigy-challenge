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

interface AddMessageAction {
  type: typeof ADD_MESSAGE;
  payload: Message;
}

export type ChatActionTypes = AddMessageAction;
