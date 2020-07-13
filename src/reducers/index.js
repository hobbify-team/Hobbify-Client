import { combineReducers } from "redux";
import usuarioReducer from "./usuarioReducer";
import routinesReducer from "./routinesReducer";

export default combineReducers({ usuarioReducer, routinesReducer });
