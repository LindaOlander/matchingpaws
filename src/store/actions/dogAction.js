import { GET_DOGS } from "../constants/constants";

export const fetchDogs = () => async dispatch => {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const results = await response.json();

    dispatch({
        type: GET_DOGS,
        data: Object.keys(results.message)
    })
};