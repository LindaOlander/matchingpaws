import { CLEAR_DOGS, GET_DOGS, FILTER_DOGS } from "../constants/constants";

export const dogReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOGS:
      return action.data;

    case CLEAR_DOGS:
      return [];

    case FILTER_DOGS:
      return [];

    default:
      return state;
  }
};
