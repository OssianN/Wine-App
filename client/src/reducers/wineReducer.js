import {
  SET_WINE_ARR,
  UPDATE_WINE,
  ARCHIVE_WINE,
  DELETE_WINE,
} from '../actions/types'

const setWines = data => data.filter(wine => !wine.archived)
const setArchivedWines = data => data.filter(wine => wine.archived)

const findAndUpdateTargetWine = (cardArr, newWine) =>
  cardArr.map(card => (card._id !== newWine._id ? card : newWine))

const archiveWine = (cardArr, wine) =>
  cardArr.map(card => {
    if (card._id === wine._id) {
      return {
        ...card,
        archived: true,
      }
    }
    return card
  })

const deleteWine = (state, deleteCardId) =>
  state.filter(card => card._id !== deleteCardId)

const initialState = {
  wines: [],
  archived: [{ name: 'test' }],
}

const wineReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WINE_ARR:
      return {
        wines: setWines(action.payload),
        archived: setArchivedWines(action.payload),
      }
    case UPDATE_WINE:
      return {
        ...state,
        wines: findAndUpdateTargetWine(state.wines, action.payload),
      }
    case ARCHIVE_WINE:
      const newState = archiveWine(state.wines, action.payload)
      return {
        ...state,
        wines: setWines(newState),
      }
    case DELETE_WINE:
      return {
        ...state,
        wines: deleteWine(state.wines, action.payload),
      }
    default:
      return state
  }
}

export default wineReducer
