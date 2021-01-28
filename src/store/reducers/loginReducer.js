import {LOGIN, LOGOUT} from '../constants/constants';

export const loginReducer = (state = { isLoggedIn:false }, action) => {
    switch(action.type) {

        case LOGIN:
            return {...action.data, isLoggedIn: true};

        case LOGOUT:
            return { isLoggedIn: false };

        default: return state;
    }
}