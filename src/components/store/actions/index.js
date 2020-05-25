import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";
export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_FAILURE";
export const DELETE_SMURFS_START = "DELETE_SMURFS_START";
export const DELETE_SMURFS_SUCCESS = "DELETE_SMURFS_SUCCESS";
export const DELETE_SMURFS_FAILURE = "DELETE_SMURFS_FAILURE";
export const UPDATE_SMURFS_START = "UPDATE_SMURFS_START";
export const UPDATE_SMURFS_SUCCESS = "UPDATE_SMURFS_SUCCESS";
export const UPDATE_SMURFS_FAILURE = "UPDATE_SMURFS_FAILURE";

export const fetchSmurfs = () => {
  // make an async request
  // redux-thunk allows us to return functions instead of objects
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    // then make the async call
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("Inside Get",res);
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
          dispatch({type: FETCH_SMURFS_FAILURE, payload: err});
      })
  };
};


export const addSmurfs = (data) => {
  // make an async request
  // redux-thunk allows us to return functions instead of objects
  return dispatch => {
    dispatch({ type: ADD_SMURFS_START });
    // then make the async call
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        console.log(res);
        dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
          dispatch({type: ADD_SMURFS_FAILURE, payload: err});
      })
  };
};

export const deleteSmurfs = (id) => {
  // make an async request
  // redux-thunk allows us to return functions instead of objects
  return dispatch => {
    dispatch({ type: DELETE_SMURFS_START });
    // then make the async call
    axios
      .delete(`http://localhost:3333/smurfs/${id}`, {
       
      })
      .then(res => {
        console.log("THIS IS INSIDE DELETE",res);
        dispatch({ type: DELETE_SMURFS_SUCCESS, payload: id });
      })
      .catch(err => {
          dispatch({type: DELETE_SMURFS_FAILURE, payload: err});
      })
  };
};




export const updateSmurfs = (data) => {
  console.log("this is data inside update", data)
  // make an async request
  // redux-thunk allows us to return functions instead of objects
  return dispatch => {
    dispatch({ type: UPDATE_SMURFS_START });
    // then make the async call
    axios
      .put(`http://localhost:3333/smurfs/${data.id}`,data)// {
        // name: data.name,
        // age: data.age,
        // height: data.height
     // })
      .then(res => {
        console.log("THIS IS INSIDE UPDATE",res);
      
        dispatch({ type: UPDATE_SMURFS_SUCCESS, payload: res.data});
      })
      .catch(err => {
          dispatch({type: UPDATE_SMURFS_FAILURE, payload: err});
      })
  };
};
