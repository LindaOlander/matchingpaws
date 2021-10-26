import { SET_DOGS } from "../constants/constants";

export const filteredDogReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DOGS:
      return action.data;

    default:
      return state;
  }
};
