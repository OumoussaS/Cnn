import { combineReducers } from "redux";
import { allRoomsReducer, RoomDetailsReducer } from "./roomReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadedUserReducer,
} from "./userReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  RoomDetails: RoomDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  loadedUser: loadedUserReducer,
});

export default reducer;
