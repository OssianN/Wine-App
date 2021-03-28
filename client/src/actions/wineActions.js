import {
  SET_WINE_ARR,
  UPDATE_WINE,
  DELETE_WINE,
} from "../actions/types";

export const setWineArr = cardArr => ({ type: SET_WINE_ARR, payload: cardArr })

export const updateWine = newWine => ({type: UPDATE_WINE, payload: newWine})

export const deleteWine = targetWine => ({type: DELETE_WINE, payload: targetWine})
