import { combineReducers } from "redux";
import MessageReducer from "./chat/reducers";

const rootReducer = combineReducers({
  chat: MessageReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
