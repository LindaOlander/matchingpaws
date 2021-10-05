import {LOGIN, LOGOUT} from "../constants/constants";

export const login = (username, password) => dispatch => {
    if (username === "admin" && password === "admin") {
        dispatch({
            type: LOGIN,
            data: {
                username: username,
                password: password
            }
        });
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}