import { ChatState, ADD_MESSAGE, ChatActionTypes } from "./types";

const initialState: ChatState = {
  messages: []
};

const MessageReducer = (
  state = initialState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return { messages: [...state.messages, action.payload] };
    default:
      return initialState;
  }
};

export default MessageReducer;
