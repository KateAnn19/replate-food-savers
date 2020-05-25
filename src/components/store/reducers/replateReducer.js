import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURFS_START,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_FAILURE,
    DELETE_SMURFS_START,
    DELETE_SMURFS_SUCCESS,
    DELETE_SMURFS_FAILURE,
    UPDATE_SMURFS_START,
    UPDATE_SMURFS_SUCCESS,
    UPDATE_SMURFS_FAILURE,
  } from "../actions";
  
  export const initialState = {
    isFetching: false,
    smurfs: [],
    error: "",
  };
  
  export const replateReducer = (state = initialState, action) => {
    console.log("in smurfs reducer", state);
    console.log("in smurfs reducer action", action);
    switch (action.type) {
      case FETCH_SMURFS_START:
        return {
          ...state,
          isFetching: true,
        };
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
        };
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case ADD_SMURFS_START:
        return {
          ...state,
          isFetching: true,
        };
      case ADD_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
        };
      case ADD_SMURFS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case DELETE_SMURFS_START:
        return {
          ...state,
          isFetching: true,
        };
      case DELETE_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: state.smurfs.filter((smurf) => smurf.id !== action.payload),
        };
      case DELETE_SMURFS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case UPDATE_SMURFS_START:
        return {
          ...state,
          isFetching: true,
        };
      case UPDATE_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: [...action.payload]
        };
      case UPDATE_SMURFS_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  