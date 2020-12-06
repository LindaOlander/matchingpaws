import {CLEAR_DOGS, GET_DOGS, GET_RANDOM_DOG_IMAGE} from '../constants/constants';

export const dogReducer = (state = [], action) => {
    switch(action.type) {

        case GET_DOGS:
            return action.data;

        case GET_RANDOM_DOG_IMAGE:
            return action.data;

        case CLEAR_DOGS:
            return [];

        default: return state;
    }
}