import { ADD_USER, DELETE_USER, FETCH_USERS } from "./types";

export const userInitialState: any = [];

export const userReducer = (state = userInitialState, action: any) => {
  switch (action.type) {
    case ADD_USER: {
      return action.payload;
    }
    case DELETE_USER: {
      return action.payload;
    }
    case FETCH_USERS: {
      return action.payload;
    }
    default:
      return state;
  }
};
