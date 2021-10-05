import { GET_DOGS } from "../constants/constants";

export const getDogs = () => async dispatch => {
    const response = await fetch('https://matchingpaws-api.herokuapp.com/dogs');
    const dog = await response.json();

    console.log('get dogs')
    console.log('dog', dog)

    dispatch({
        type: GET_DOGS,
        data: dog
    })
};