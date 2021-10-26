import { GET_DOGS, SET_DOGS, FILTER_DOGS } from "../constants/constants";

export const getDogs = () => async (dispatch) => {
  //   const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const response = await fetch("https://matchingpaws-api.herokuapp.com/dogs");
  const results = await response.json();

  dispatch({
    type: GET_DOGS,
    data: results,
  });
};

export const setDogs = (filteredDogs) => (dispatch) => {
  dispatch({
    type: SET_DOGS,
    data: filteredDogs,
  });
};

export const getFilterDogs = (filteredDogs) => async (dispatch) => {
  dispatch({
    type: FILTER_DOGS,
    filteredDogs,
  });
};
